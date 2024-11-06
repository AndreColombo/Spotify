export default function Footer() {
  return (
    <>
      <div className="mt-14 pb-4 mx-2">
        <ul className="flex justify-between">
          <li>
            <h1 className="font-bold text-[14.5px] leading-[22px]">Empresa</h1>
            <ul className="text-B3 flex flex-col">
              <a
                href="https://www.spotify.com/br-pt/about-us/contact/"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Sobre
              </a>
              <a
                href="https://www.lifeatspotify.com/"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Empregos
              </a>
              <a
                href="https://newsroom.spotify.com/"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                For the Record
              </a>
            </ul>
          </li>
          <li>
            <h1 className="font-bold text-[14.5px] leading-[22px]">
              Comunidades
            </h1>
            <ul className="text-B3 flex flex-col">
              <a
                href="https://artists.spotify.com/home"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Para Artistas
              </a>
              <a
                href="https://developer.spotify.com/"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Desenvolvedores
              </a>
              <a
                href="https://ads.spotify.com/pt-BR/"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Publicidade
              </a>
              <a
                href="https://investors.spotify.com/home/default.aspx"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Investidores
              </a>
              <a
                href="https://spotifyforvendors.com/"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Fornecedores
              </a>
            </ul>
          </li>
          <li>
            <h1 className="font-bold text-[14.5px] leading-[22px]">
              Links úteis
            </h1>
            <ul className="text-B3 flex flex-col">
              <a
                href="https://support.spotify.com/br-pt/"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Suporte
              </a>
              <a
                href="https://www.spotify.com/br-pt/download/windows/"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Aplicativo móvel grátis
              </a>
            </ul>
          </li>
          <li>
            <h1 className="font-bold text-[14.5px] leading-[22px]">
              Planos do Spotify
            </h1>
            <ul className="text-B3 flex flex-col">
              <a
                href="https://www.spotify.com/br-pt/premium/?ref=spotifycom_footer_premium_individual"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Premium Individual
              </a>
              <a
                href="https://www.spotify.com/br-pt/duo/?ref=spotifycom_footer_premium_duo"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Premium Duo
              </a>
              <a
                href="https://www.spotify.com/br-pt/family/?ref=spotifycom_footer_premium_family"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Premium Família
              </a>
              <a
                href="https://www.spotify.com/br-pt/student/?ref=spotifycom_footer_premium_student"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Premium Universitário
              </a>
              <a
                href="https://www.spotify.com/br-pt/free/?ref=spotifycom_footer_free"
                className="text-[14.5px] leading-[22px] underlineText whiteText"
              >
                Spotify Free
              </a>
            </ul>
          </li>
          <li className="flex space-x-5">
            <span className="h-10 w-10 bg-22 rounded-full flex justify-center items-center">
              <a href="https://www.instagram.com/spotify">
                <img src="/Icons/Instagram.png" className="h-4" />
              </a>
            </span>
            <span className="h-10 w-10 bg-22 rounded-full flex justify-center items-center">
              <a href="https://twitter.com/spotify">
                <img src="/Icons/Twitter.png" className="h-4" />
              </a>
            </span>
            <span className="h-10 w-10 bg-22 rounded-full flex justify-center items-center">
              <a href="https://www.facebook.com/SpotifyBrasil/?brand_redir=6243987495">
                <img src="/Icons/Facebook.png" className="h-4" />
              </a>
            </span>
          </li>
        </ul>

        <hr className="border-22 my-9" />

        <div className="flex justify-between text-B3 text-[13px] font-medium mb-16">
          <div className="flex space-x-4">
            <a
              href="https://www.spotify.com/br-pt/legal/end-user-agreement/"
              className="whiteText"
            >
              Legal
            </a>
            <a
              href="https://www.spotify.com/br-pt/safetyandprivacy"
              className="whiteText"
            >
              Segurança e Centro de privacidade
            </a>
            <a
              href="https://www.spotify.com/br-pt/legal/privacy-policy/"
              className="whiteText"
            >
              Política de privacidade
            </a>
            <a
              href="https://www.spotify.com/br-pt/legal/cookies-policy/"
              className="whiteText"
            >
              Cookies
            </a>
            <a
              href="https://www.spotify.com/br-pt/legal/privacy-policy/#s3"
              className="whiteText"
            >
              Sobre anúncios
            </a>
            <a
              href="https://www.spotify.com/br-pt/accessibility"
              className="whiteText"
            >
              Acessibilidade
            </a>
          </div>
          <p className="mr-4">© 2024 Spotify AB</p>
        </div>
      </div>
    </>
  );
}
