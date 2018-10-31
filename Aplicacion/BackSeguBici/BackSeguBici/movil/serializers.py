from rest_framework import serializers
from movil.models import Imagen


class ImagenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imagen
        fields = ('urlimagen','id')
