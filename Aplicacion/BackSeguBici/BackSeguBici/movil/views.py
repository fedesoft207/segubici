from django.shortcuts import render
from django.shortcuts import render_to_response
from rest_framework.decorators import permission_classes
from movil.permissions import IsPostOrIsAuthenticated

from movil.models import Imagen
from rest_framework import generics
from movil.serializers import *


def principal(request):
    return render_to_response("index.html")



class ImagenList(generics.ListCreateAPIView):
    serializer_class = ImagenSerializer
    queryset = Imagen.objects.all()


class ImagenId(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ImagenSerializer
    queryset = Imagen.objects.all()

@permission_classes((IsPostOrIsAuthenticated, ))
class PropietarioList(generics.ListCreateAPIView):
    serializer_class = PropietarioSerializer
    queryset = Propietario.objects.all()


# Create your views here.
