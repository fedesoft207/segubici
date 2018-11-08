from django.shortcuts import render
from django.shortcuts import render_to_response
from rest_framework.decorators import permission_classes
from movil.permissions import IsPostOrIsAuthenticated
from rest_framework.permissions import AllowAny

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


class PropietarioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PropietarioSerializer
    queryset = Propietario.objects.all()


@permission_classes((AllowAny,))
class TipoidentificacionList(generics.ListAPIView):
    serializer_class = TipoidentificacionSerializer
    queryset = Tipoidentificacion.objects.all()


class TipoidentificacionDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TipoidentificacionSerializer
    queryset = Tipoidentificacion.objects.all()


class BicicletaList(generics.ListAPIView):
    serializer_class = BicicletaSerializer
    queryset = Bicicleta.objects.all()


class BicicletaDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BicicletaSerializer
    queryset = Bicicleta.objects.all()


class TipoCalleList(generics.ListAPIView):
    serializer_class = Tipocalle
    queryset = Tipocalle.objects.all()


class TipoCalleDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = Tipocalle
    queryset = Tipocalle.objects.all()


class CardinalidadList(generics.ListAPIView):
    serializer_class = Cardinalidad
    queryset = Cardinalidad.objects.all()


class CardinalidadDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = Cardinalidad
    queryset = Cardinalidad.objects.all()


# Create your views here.
