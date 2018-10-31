from rest_framework import serializers
from movil.models import *
from django.contrib.auth.models import User


class PropietarioSerializer(serializers.ModelSerializer):
    username = serializers.CharField(write_only=True, source="user.username")
    password = serializers.CharField(write_only=True, source="user.password")
    numeroidentificacion = serializers.IntegerField()
    nombrepropietario = serializers.CharField(max_length=30)
    apellidopropietario = serializers.CharField(max_length=30)


    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'numeroidentificacion',
                'nombrepropietario', 'apellidopropietario')
    
    def create(self, validated_data, instance=None):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        user.set_password(user_data['password'])
        user.save()
        Propietario.objects.update_or_create(user=user, **validated_data)
        usuario = Propietario.objects.get(user=user)
        return usuario



class ImagenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imagen
        fields = ('urlimagen', 'id')


