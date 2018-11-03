from django.db import models
from django.contrib.auth.models import User


class Bicicleta(models.Model):
    numerobicicleta = models.CharField(max_length=10)
    color = models.CharField(max_length=30)
    rin = models.CharField(max_length=30)


class Imagen (models.Model):
    urlimagen = models.ImageField(
        upload_to='img/fotosapp/', blank=True, null=True)
    bicicleta = models.ForeignKey(Bicicleta, on_delete=models.CASCADE)


class Tipoidentificacion(models.Model):
    descripciontipoidentificacion = models.TextField()
    siglatipoidentificacion = models.CharField(max_length=3)
    def __str__(self):
        return self.siglatipoidentificacion


class Tipocalle(models.Model):
    descripciontipocalle = models.TextField()


class Cardinalidad(models.Model):
    descripcioncardinalidad = models.TextField()


class Departamento(models.Model):
    descrpciondepartamento = models.TextField()


class Ciudad(models.Model):
    descripcionciudad = models.TextField()
    departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE)


class Propietario (models.Model):
    numeroidentificacion = models.IntegerField()
    tipoidentificacion = models.ForeignKey(Tipoidentificacion, on_delete=models.CASCADE)
    nombrepropietario = models.CharField(max_length=30)
    apellidopropietario = models.CharField(max_length=30)
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class Localizacion(models.Model):
    tipocalle = models.ForeignKey(Tipocalle, on_delete=models.CASCADE)
    letrauno = models.CharField(max_length=1)
    bis = models.CharField(max_length=3)
    letrados = models.CharField(max_length=1)
    cardinalidad = models.ForeignKey(Cardinalidad, on_delete=models.CASCADE)
    numerocalle = models.CharField(max_length=3)
    letratres = models.CharField(max_length=1)
    numerocomplemento = models.CharField(max_length=3)
    ciudad = models.ForeignKey(Ciudad, on_delete=models.CASCADE)
    email = models.CharField(max_length=30)
    propietario = models.ForeignKey(Propietario, on_delete=models.CASCADE)


class Geolocalizacion (models.Model):
    latitudgeolocalizacion = models.IntegerField()
    longitudgeolocalizacion = models.IntegerField()
    propietario = models.ForeignKey(Propietario, on_delete=models.CASCADE)

# Create your models here.
