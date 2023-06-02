import React from 'react'
import {fetchNavbarData} from "../Api"
import { useQuery } from 'react-query'

function Navbar() {


    const { isLoading, error, data } = useQuery('navbarData', fetchNavbarData)
    
  
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  {

    data.map(item=>{

       console.log(item[0].label)

    })
  }

  
  return (
    <nav className="navbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="#" className="nav-link">{data.label}</a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">Hizmetlerimiz</a>
        <ul className="dropdown-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">Teknik Hizmetlerimiz</a>
            <ul className="dropdown-menu">
              <li className="nav-item">
                <a href="#" className="nav-link">Frontend Teknolojileri</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Backend Teknolojileri</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">AWS Hizmetleri</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Danışmanlık Hizmetlerimiz</a>
            <ul className="dropdown-menu">
              <li className="nav-item">
                <a href="#" className="nav-link">Teknik Destek</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Bilgilendirme Hizmetleri</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Mentorluk Hizmetleri</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Danışmanlık Eğitimleri</a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a href="#" className="nav-link">Sertifikalı Danışmanlık Hizmeti</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Kurumsal Danışmanlık Hizmeti</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Eğitim Öğretim Planlama</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Yazılım Danışmanlığı</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Proje Danışmanlığı</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Hatalı Altyapı Onarımı</a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">Hakkımızda</a>
        <ul className="dropdown-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">Biz Kimiz?</a>
          </li>
          <li className="nav-item">
          <a href="#" className="nav-link">Kurumsal</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Referanslarımız</a>
          <ul className="dropdown-menu">
            <li className="nav-item">
              <a href="#" className="nav-link">Geçmiş Referanslar</a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a href="#" className="nav-link">x referansı</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">y referansı</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">z referansı</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Gelecek Referanslar</a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a href="#" className="nav-link">a referansı</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">b referansı</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">c referansı</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Vizyon</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Misyon</a>
        </li>
      </ul>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link">İletişim</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link">Kayıt Ol</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link">Giriş Yap</a>
    </li>
  </ul>
</nav>
  
  )
}

export default Navbar