import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
 
  en: {
    translation: {
      navbar : {
        dropdown: {
          headers: {
            mensclothings : "Men's Clothing",
            womensclothings : "Women's Clothing",
            electronics : "Electronics",
            language : "Language",
            featured : "Featured"
          },
          sections: {
            tshirt : "T-shirt",
            jacket : "Jacket",
            bag : "Bag",
            jewelery : "Jewelery",
          }
        },
        buttons :{
          register : "Register",
          login : "Log In"
        }
      },
      register: {
        placeholders : {
          email : "E-mail",
          password : "Password",
        },
        buttons : {
          createUser : "Create User",
          signOut : "Sign Out",
        },
        user : "User Logged In:"
      }
    },
  },

  tr: {
    translation: {
      navbar : {
        dropdown: {
          headers: {
            mensclothings : "Erkek Giyim",
            womensclothings : "Kadın Giyim",
            electronics: "Elektronik",
            language : "Dil",
            featured : "Öne Çıkanlar"
          },
          sections: {
            tshirt : "Tişört",
            jacket : "Ceket",
            bag : "Çanta",
            jewelery : "Takı",
          }
        },
        buttons :{
          register : "Kayıt Ol",
          login : "Giriş Yap"
        }
      },
      register: {
        placeholders : {
          email : "E-posta",
          password : "Şifre",
        },
        buttons : {
          createUser : "Kullanıcı Oluştur",
          signOut : "Çıkış Yap",
        },
        user : "Giriş yapan kullanıcı:"
      }
    },
  },

};

i18n
.use(initReactI18next)
.init({
  resources,
  lng: "tr",
  interpolation:{
    escapeValue: false,
  }
});
  
  export default i18n;