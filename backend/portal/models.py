from django.db import models
from django.utils import timezone

class Job(models.Model):
    CATEGORY_CHOICES = [
        ('central', 'Central Government'),
        ('state', 'State PSC / Police'),
        ('defence', 'Defence & Armed Forces'),
        ('railway', 'Railway & Metro'),
        ('bank', 'Banking & Finance'),
        ('teaching', 'Teaching & Education'),
        ('medical', 'Health & Medical'),
        ('psu', 'PSU & Navratna'),
    ]

    title = models.CharField(max_length=255, help_text="e.g. RRB NTPC Graduate Level 2026")
    department = models.CharField(max_length=255, help_text="e.g. Railway Recruitment Board")
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='central')
    tag = models.CharField(max_length=50, default='central', blank=True)
    vacancies = models.CharField(max_length=100, help_text="e.g. 3,548 Posts")
    salary = models.CharField(max_length=150, help_text="e.g. ₹29,200 – ₹92,300 (Level 5 & 6)")
    location = models.CharField(max_length=150, default='All India')
    qualification = models.CharField(max_length=255, help_text="e.g. Graduate (Any Stream) or 10+2")
    application_start_date = models.DateField(null=True, blank=True)
    application_last_date = models.DateField(help_text="Application Deadline")
    posted_date = models.DateField(default=timezone.now)
    badges = models.CharField(max_length=150, default='NEW, HOT', help_text="Comma-separated badges")
    description = models.TextField(help_text="Detailed job description and requirements")
    syllabus = models.TextField(blank=True, default='Written Exam → Interview / Skill Test')
    age_limit = models.CharField(max_length=150, blank=True, default='18–35 years (relaxation as per rules)')
    application_fee = models.CharField(max_length=150, blank=True, default='₹500 (Concession as applicable)')
    official_link = models.URLField(help_text="Official recruitment portal URL")
    icon = models.CharField(max_length=100, default='icons/brand_logo.svg')
    is_active = models.BooleanField(default=True, help_text="Uncheck to hide without deleting")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-posted_date', '-id']
        verbose_name = 'Government Job'
        verbose_name_plural = 'Government Jobs'

    def __str__(self):
        return f"{self.title} ({self.department})"

    def to_dict(self):
        badge_list = [b.strip() for b in self.badges.split(',') if b.strip()]
        return {
            'id': f"dj_{self.id}",
            'title': self.title,
            'dept': self.department,
            'category': self.category,
            'tag': self.tag or self.category,
            'vacancies': self.vacancies,
            'salary': self.salary,
            'location': self.location,
            'qualification': self.qualification,
            'lastDate': self.application_last_date.isoformat(),
            'posted': self.posted_date.isoformat(),
            'badges': badge_list if badge_list else ['Govt Job'],
            'desc': self.description,
            'syllabus': self.syllabus,
            'ageLimit': self.age_limit,
            'applicationFee': self.application_fee,
            'officialLink': self.official_link,
            'icon': self.icon,
            'iconBg': 'rgba(255,153,51,.12)'
        }


class Internship(models.Model):
    CATEGORY_CHOICES = [
        ('ministry', 'Ministry / Government'),
        ('research', 'Research & Fellowship'),
        ('space', 'Space & Tech'),
        ('corporate', 'Corporate / PSU'),
    ]

    title = models.CharField(max_length=255, help_text="e.g. NITI Aayog Internship Scheme")
    organization = models.CharField(max_length=255, help_text="e.g. NITI Aayog, Govt of India")
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='ministry')
    stipend = models.CharField(max_length=150, help_text="e.g. ₹15,000 / month or Honorary")
    duration = models.CharField(max_length=100, help_text="e.g. 6 to 12 weeks")
    spots = models.CharField(max_length=100, default='50 seats / cycle')
    application_last_date = models.DateField()
    description = models.TextField()
    eligibility = models.TextField(help_text="Degrees, percentage, or skills required")
    official_link = models.URLField()
    icon = models.CharField(max_length=100, default='icons/brand_logo.svg')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-id']
        verbose_name = 'Government Internship'
        verbose_name_plural = 'Government Internships'

    def __str__(self):
        return f"{self.title} ({self.organization})"

    def to_dict(self):
        return {
            'id': f"di_{self.id}",
            'title': self.title,
            'org': self.organization,
            'category': self.category,
            'stipend': self.stipend,
            'duration': self.duration,
            'spots': self.spots,
            'lastDate': self.application_last_date.isoformat(),
            'desc': self.description,
            'eligibility': self.eligibility,
            'officialLink': self.official_link,
            'icon': self.icon,
            'iconBg': 'rgba(11,26,62,.10)'
        }


class EntranceExam(models.Model):
    CATEGORY_CHOICES = [
        ('engineering', 'Engineering (JEE/GATE)'),
        ('medical', 'Medical (NEET)'),
        ('management', 'Management (CAT/CUET)'),
        ('law', 'Law & Judiciary (CLAT)'),
        ('teaching', 'Teaching (CTET/TET)'),
        ('defence', 'Defence (NDA/CDS)'),
    ]

    name = models.CharField(max_length=255, help_text="e.g. JEE Main 2026")
    full_form = models.CharField(max_length=255, help_text="e.g. Joint Entrance Examination (Main)")
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='engineering')
    level = models.CharField(max_length=100, default='National')
    conducted_by = models.CharField(max_length=255, help_text="e.g. National Testing Agency (NTA)")
    frequency = models.CharField(max_length=100, default='Annual')
    exam_date = models.CharField(max_length=100, help_text="e.g. May 2026")
    reg_date = models.CharField(max_length=100, default='Open Now')
    vacancies = models.CharField(max_length=150, blank=True, help_text="e.g. ~35,000 NIT/IIIT Seats")
    institutes = models.TextField(help_text="Participating colleges and institutions")
    description = models.TextField()
    official_link = models.URLField()
    icon = models.CharField(max_length=100, default='icons/nta.svg')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-id']
        verbose_name = 'Entrance Examination'
        verbose_name_plural = 'Entrance Examinations'

    def __str__(self):
        return f"{self.name} ({self.conducted_by})"

    def to_dict(self):
        return {
            'id': f"de_{self.id}",
            'name': self.name,
            'fullForm': self.full_form,
            'category': self.category,
            'level': self.level,
            'conductedBy': self.conducted_by,
            'frequency': self.frequency,
            'examDate': self.exam_date,
            'regDate': self.reg_date,
            'vacancies': self.vacancies or 'Check notification',
            'institutes': self.institutes,
            'desc': self.description,
            'officialLink': self.official_link,
            'icon': self.icon
        }


class LiveAlert(models.Model):
    title = models.CharField(max_length=255)
    date_text = models.CharField(max_length=100, default='Today')
    icon = models.CharField(max_length=100, default='icons/brand_logo.svg')
    link = models.URLField(blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-id']
        verbose_name = 'Notification Alert'
        verbose_name_plural = 'Notification Alerts'

    def __str__(self):
        return self.title

    def to_dict(self):
        return {
            'title': self.title,
            'date': self.date_text,
            'icon': self.icon,
            'link': self.link
        }


# ─── AUTO-SYNC SIGNALS: Automatically export all_data.json on any change in Admin ───
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
import json
import os

def export_all_data_to_json():
    try:
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        json_path = os.path.join(base_dir, 'all_data.json')
        data = {
            'jobs': [j.to_dict() for j in Job.objects.filter(is_active=True).order_by('id')],
            'internships': [i.to_dict() for i in Internship.objects.filter(is_active=True).order_by('id')],
            'entrance': [e.to_dict() for e in EntranceExam.objects.filter(is_active=True).order_by('id')],
            'alerts': [a.to_dict() for a in LiveAlert.objects.filter(is_active=True).order_by('-id')],
        }
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    except Exception as exc:
        print(f"Error exporting all_data.json: {exc}")

@receiver([post_save, post_delete], sender=Job)
@receiver([post_save, post_delete], sender=Internship)
@receiver([post_save, post_delete], sender=EntranceExam)
@receiver([post_save, post_delete], sender=LiveAlert)
def auto_sync_json_on_change(sender, **kwargs):
    export_all_data_to_json()
