from rest_framework import serializers
from movil.models import *
from django.contrib.auth.models import User
from drf_extra_fields.fields import Base64ImageField


class PropietarioSerializer(serializers.ModelSerializer):
    username = serializers.CharField(write_only=True, source="user.username")
    password = serializers.CharField(write_only=True, source="user.password")
    numeroidentificacion = serializers.IntegerField()
    nombrepropietario = serializers.CharField(max_length=30)
    apellidopropietario = serializers.CharField(max_length=30)
    tipoidentificacion = serializers.PrimaryKeyRelatedField(
        queryset=Tipoidentificacion.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'numeroidentificacion',
                  'nombrepropietario', 'apellidopropietario', 'tipoidentificacion')

    def create(self, validated_data, instance=None):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        user.set_password(user_data['password'])
        user.save()
        Propietario.objects.update_or_create(user=user, **validated_data)
        usuario = Propietario.objects.get(user=user)
        return usuario


class ImagenSerializer(serializers.ModelSerializer):
    urlimagen = Base64ImageField()
    class Meta:
        model = Imagen
        fields = ('urlimagen', 'bicicleta', 'id')


class TipoidentificacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipoidentificacion
        fields = ('descripciontipoidentificacion',
                  'siglatipoidentificacion', 'id')


class BicicletaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bicicleta
        fields = ('id', 'numerobicicleta', 'color', 'rin')


class TipoCalleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipocalle
        fields = ('id', 'descripciontipocalle')


class CardinalidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cardinalidad
        fields = ('id', 'descripcioncardinalidad')


class DepartamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departamento
        fields = ('id', 'descrpciondepartamento')


class CiudadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciudad
        fields = ('id', 'descripcionciudad', 'departamento')


class LocalizacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Localizacion
        fields = ('id', 'tipocalle', 'letrauno', 'bis', 'letrados', 'cardinalidad',
                  'numerocalle', 'letratres', 'numerocomplemento', 'ciudad', 'email', 'propietario')


class GeolocalizacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Geolocalizacion
        fields = ('id', 'latitudgeolocalizacion',
                  'longitudgeolocalizacion', 'propietario')
