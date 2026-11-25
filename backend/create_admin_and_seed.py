import os
import sys
import django

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'jobvani_admin.settings')
django.setup()

from django.contrib.auth.models import User

def setup():
    # 1. Create or update Superuser
    username = 'Lucky'
    password = 'hemanth@143'
    email = 'lucky@jobvani.in'

    if not User.objects.filter(username=username).exists():
        User.objects.create_superuser(username=username, email=email, password=password)
        print(f"[OK] Superuser created: Username='{username}', Password='{password}'")
    else:
        u = User.objects.get(username=username)
        u.set_password(password)
        u.save()
        print(f"[OK] Superuser '{username}' password reset to '{password}'")

if __name__ == '__main__':
    setup()
