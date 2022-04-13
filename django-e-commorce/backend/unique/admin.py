from django.contrib import admin
from .models import Unique

class UniqueAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'description', 'category','price')

# Register your models here.

admin.site.register(Unique, UniqueAdmin)
