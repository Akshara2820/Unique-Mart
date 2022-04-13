from rest_framework import serializers
from .models import Unique

class UniqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unique
        fields =('id','name','description','category','price')