from django.db import models

# Create your models here.

class Unique(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    category = models.CharField(max_length=120)
    price = models.CharField(max_length=120)


    def _str_(self):
        return self.name
