
from django.conf.urls import url
from movil import views

urlpatterns = [
    #path('admin/', admin.site.urls),
    #path('principal/', views.principal),
    url(r'^imagen/$', views.ImagenList.as_view()),
    url(r'^imagen/(?P<pk>[0-9]+)/$', views.ImagenId.as_view()),

    url(r'^propietario/$', views.PropietarioList.as_view()),
    url(r'^propietario/(?P<pk>[0-9]+)/$', views.PropietarioDetail.as_view()),

    url(r'^Tipoidentificacion/$', views.TipoidentificacionList.as_view()),
    url(r'^Tipoidentificacion/(?P<pk>[0-9]+)/$', views.TipoidentificacionDetail.as_view()),

    url(r'^Bicicleta/$', views.BicicletaList.as_view()),
    url(r'^Bicicleta/(?P<pk>[0-9]+)/$', views.BicicletaDetail.as_view()),

    url(r'^TipoCalle/$', views.TipoCalleList.as_view()),
    url(r'^TipoCalle/(?P<pk>[0-9]+)/$', views.TipoCalleDetail.as_view()),

    url(r'^Cardinalidad/$', views.CardinalidadList.as_view()),
    url(r'^Cardinalidad/(?P<pk>[0-9]+)/$', views.CardinalidadDetail.as_view()),

    url(r'^Departamento/$', views.DepartamentoList.as_view()),
    url(r'^Departamento/(?P<pk>[0-9]+)/$', views.DepartamentoDetail.as_view()),

    url(r'^Ciudad/$', views.CardinalidadList.as_view()),
    url(r'^Ciudad/(?P<pk>[0-9]+)/$', views.CardinalidadDetail.as_view()),

    url(r'^Localizacion/$', views.LocalizacionList.as_view()),
    url(r'^Localizacion/(?P<pk>[0-9]+)/$', views.LocalizacionDetail.as_view()),

    url(r'^Geolocalizacion/$', views.GeolocalizacionList.as_view()),
    url(r'^Geolocalizacion/(?P<pk>[0-9]+)/$', views.GeolocalizacionDetail.as_view()),
    
]
