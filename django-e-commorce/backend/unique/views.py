from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UniqueSerializer
from .models import Unique
from rest_framework.response import Response
from django.shortcuts import render, get_object_or_404
# from src import '.pages/uniques1.js'
# Create your views here.

class UniqueView(APIView):

    def get(self,request):

        api = Unique.objects.all()
        serializer = UniqueSerializer(api,many=True)
        return Response(serializer.data)




class Details(APIView):
    def get(self, request, pk):
        data = get_object_or_404(Unique, pk=pk)
        serializer = UniqueSerializer(data)
        return Response(serializer.data)



class Category(APIView):
    def get (self, request):
        category = Unique.models.filter()
        serializer = UniqueSerializer(category, many=True)
        return Response(serializer.data)

        