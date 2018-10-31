
from django.conf.urls import url
from movil import views

urlpatterns = [
    #path('admin/', admin.site.urls),
    #path('principal/', views.principal),
    url(r'^imagen/$', views.ImagenList.as_view()),
    url(r'^imagen/(?P<pk>[0-9]+)/$', views.ImagenId.as_view()),
]
