from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.get_all_opportunities, name='api_all'),
    path('jobs/', views.get_jobs, name='api_jobs'),
    path('internships/', views.get_internships, name='api_internships'),
    path('entrance/', views.get_entrance, name='api_entrance'),
    path('stats/', views.get_stats, name='api_stats'),
]

