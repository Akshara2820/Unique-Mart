from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UniqueSerializer
from .models import Unique
from rest_framework.response import Response
# from src import '.pages/uniques1.js'
# Create your views here.

class UniqueView(APIView):

    def get(self,request):

        api = Unique.objects.all()
        serializer = UniqueSerializer(api,many=True)
        return Response(serializer.data)




# class Details():
#     def details_unique(request, pk):
#         post = get_object_or_404(Unique, pk=pk)
#         return Response(uniques1.js)