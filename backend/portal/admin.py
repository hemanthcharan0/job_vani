from django.contrib import admin
from .models import Job, Internship, EntranceExam, LiveAlert

# Custom Admin Site Branding
admin.site.site_header = "JobVani Central Admin Portal"
admin.site.site_title = "JobVani Admin"
admin.site.index_title = "Manage Government Jobs, Entrance Exams & Internships"

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('title', 'department', 'vacancies', 'salary', 'category', 'application_last_date', 'is_active')
    list_filter = ('category', 'is_active', 'application_last_date', 'posted_date')
    search_fields = ('title', 'department', 'qualification', 'location', 'description')
    date_hierarchy = 'application_last_date'
    list_editable = ('is_active',)
    fieldsets = (
        ("Basic Information", {
            "fields": ("title", "department", "category", "tag", "icon")
        }),
        ("Vacancies & Pay Scale", {
            "fields": ("vacancies", "salary", "location")
        }),
        ("Eligibility & Schedule", {
            "fields": ("qualification", "age_limit", "application_start_date", "application_last_date", "posted_date")
        }),
        ("Application Details", {
            "fields": ("official_link", "application_fee", "badges", "syllabus", "description")
        }),
        ("Status", {
            "fields": ("is_active",)
        }),
    )

@admin.register(Internship)
class InternshipAdmin(admin.ModelAdmin):
    list_display = ('title', 'organization', 'stipend', 'duration', 'spots', 'application_last_date', 'is_active')
    list_filter = ('category', 'is_active', 'application_last_date')
    search_fields = ('title', 'organization', 'eligibility', 'description')
    list_editable = ('is_active',)
    fieldsets = (
        ("Internship Details", {
            "fields": ("title", "organization", "category", "icon")
        }),
        ("Perks & Duration", {
            "fields": ("stipend", "duration", "spots", "application_last_date")
        }),
        ("Eligibility & Portal", {
            "fields": ("eligibility", "official_link", "description", "is_active")
        }),
    )

@admin.register(EntranceExam)
class EntranceExamAdmin(admin.ModelAdmin):
    list_display = ('name', 'full_form', 'conducted_by', 'exam_date', 'reg_date', 'level', 'is_active')
    list_filter = ('category', 'level', 'is_active')
    search_fields = ('name', 'full_form', 'conducted_by', 'institutes', 'description')
    list_editable = ('is_active',)
    fieldsets = (
        ("Exam Profile", {
            "fields": ("name", "full_form", "conducted_by", "category", "level", "icon")
        }),
        ("Schedule & Seats", {
            "fields": ("exam_date", "reg_date", "frequency", "vacancies")
        }),
        ("Target Institutions & Links", {
            "fields": ("institutes", "official_link", "description", "is_active")
        }),
    )

@admin.register(LiveAlert)
class LiveAlertAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_text', 'is_active', 'created_at')
    list_filter = ('is_active', 'created_at')
    search_fields = ('title',)
    list_editable = ('is_active',)
