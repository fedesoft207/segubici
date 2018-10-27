from django.db import models

class Imagen (models.Model):
    urlimagen = models.CharField(max_length=50)

class Bicicleta(models.Model):
    numerobicicleta = models.CharField(max_length=10)
    idimagen = models.ForeignKey(Imagen, on_delete=models.CASCADE)

class Tipoidentificacion(models.Model):
    descripciontipoidentificacion = models.CharField(max_length=50)
    siglatipoidentificacion = models.CharField(max_length=3)

class Tipocalle(models.Model):
    descripciontipocalle = models.CharField(max_length=30)

class Cardinalidad(models.Model):
    descripcioncardinalidad = models.CharField(max_length=30)

class Departamento(models.Model):
    descrpciondepartamento = models.CharField(max_length=30)

class Ciudad(models.Model):
    descripcionciudad = models.CharField(max_length=30)
    departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE)

class Localizacion(models.Model):
    tipocalle = models.ForeignKey(Tipocalle, on_delete=models.CASCADE)
    letrauno = models.CharField(max_length=1)
    bis = models.CharField(max_length=3)
    letrados = models.CharField(max_length=1)
    cardinalidad = models.ForeignKey(Cardinalidad, on_delete=models.CASCADE)
    numerocalle = models.CharField(max_length=3)
    letratres = models.CharField(max_length=1)
    numerocomplemento = models.CharField(max_length=3)
    cuidad = models.ForeignKey(Ciudad, on_delete=models.CASCADE)
    email = models.CharField(max_length=30)


# Create your models here.
