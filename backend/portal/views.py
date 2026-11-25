from django.http import JsonResponse
from django.views.decorators.http import require_GET
from .models import Job, Internship, EntranceExam, LiveAlert

def add_cors_headers(response):
    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    response["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    return response

@require_GET
def get_all_opportunities(request):
    """
    Returns all active jobs, internships, entrance exams, and alerts
    for the JobVani public frontend with CORS enabled.
    """
    jobs = [j.to_dict() for j in Job.objects.filter(is_active=True)]
    internships = [i.to_dict() for i in Internship.objects.filter(is_active=True)]
    entrance = [e.to_dict() for e in EntranceExam.objects.filter(is_active=True)]
    alerts = [a.to_dict() for a in LiveAlert.objects.filter(is_active=True)]

    data = {
        'status': 'success',
        'counts': {
            'jobs': len(jobs),
            'internships': len(internships),
            'entrance': len(entrance),
            'alerts': len(alerts),
        },
        'jobs': jobs,
        'internships': internships,
        'entrance': entrance,
        'alerts': alerts
    }
    return add_cors_headers(JsonResponse(data))

@require_GET
def get_jobs(request):
    jobs = [j.to_dict() for j in Job.objects.filter(is_active=True)]
    return add_cors_headers(JsonResponse({'status': 'success', 'count': len(jobs), 'data': jobs}))

@require_GET
def get_internships(request):
    internships = [i.to_dict() for i in Internship.objects.filter(is_active=True)]
    return add_cors_headers(JsonResponse({'status': 'success', 'count': len(internships), 'data': internships}))

@require_GET
def get_entrance(request):
    entrance = [e.to_dict() for e in EntranceExam.objects.filter(is_active=True)]
    return add_cors_headers(JsonResponse({'status': 'success', 'count': len(entrance), 'data': entrance}))

@require_GET
def get_stats(request):
    stats = {
        'total_jobs': Job.objects.count(),
        'active_jobs': Job.objects.filter(is_active=True).count(),
        'total_internships': Internship.objects.count(),
        'active_internships': Internship.objects.filter(is_active=True).count(),
        'total_entrance_exams': EntranceExam.objects.count(),
        'active_entrance_exams': EntranceExam.objects.filter(is_active=True).count(),
    }
    return add_cors_headers(JsonResponse({'status': 'success', 'stats': stats}))
