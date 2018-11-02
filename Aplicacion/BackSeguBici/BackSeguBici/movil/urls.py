
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

    
]
