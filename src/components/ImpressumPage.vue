<template>

  <div>
    <Header/>

    <div class="full-width center-horizontal">
      <div style="width: 100vw; max-width: 1000px">
        <h1 class="center-text">Impressum</h1>
        <p class="center-text">Jason Enns<br>
        Ulmenstraße 13<br>
        34281 Gudensberg</p>
        <p class="center-text">Email: jm.enns04@gmail.com</p>

        <h1 class="center-text">Datenschutzerklärung (Inforge, DiceBluff, FrameGame)</h1>
        <h3 class="center-text">Allgemeiner Hinweis</h3>
        <p class="center-text">Inforge ist die Mutterplatform für die Browsergames 'DiceBluff' und 'FrameGame'. Dabei kann Inforge auch auf die Daten von DiceBluff und FrameGame zugreifen. Wir geben hier ein Überblick über den Datenschutzt sowohl von Inforge als auch Für DiceBluff und FrameGame.</p>
        <h3 class="center-text">Verantwortliche für die Datenerfassung</h3>
        <p class="center-text">Die Datenverarbeitung auf dieser Webseite erfolgt durch den Betreiber von Infrorge (inforge.de). Somit ist der Betreiber von Inforge auch füe die Datenerfassung von DiceBluff und FrameGame verantwortlich.</p>
        <h3 class="center-text">Wie werden Daten erfasst? Was für Daten werden erfasst?</h3>
        <p class="center-text">Die Webseite von Inforge sammelt direkt keine Daten jeglicher Art. DiceBluff und FrameGame übermitteln die selbstgewählten Nutzernamen an den Inforge Server, die so lange auf dem Server gespeichert bleiben, wie die Spielsitzung dauert. Der Host entscheidet dabei wie lange eine Sitzung offen bleibt. Der Nutzername wird zusätzlich als Cookie gespeichert. Zusätlich werden Spielmechaniken als Cookies gespeichert, die nur notwenig für die Spielmechanik sind und keine persönlichen Daten beinhalten. Außerdem wird jede Spieltechnische Aktion des Nutzers an den Server weitergeleitet, die auch so lange gespeichert bleibt, bis die Sitzung geschlossen wird. Der Inforgebetreiber kann die Spieltechnischen Daten sowie den Nutzernamen einsehen.</p>
        <h3 class="center-text">Wofür werden die Daten genutzt?</h3>
        <p class="center-text">Spieltechnische Daten und Nutzernamen werden nur für die Spieltechnik genutzt, damit die jeweiligen Spiele funktionieren und ein Zusammenspiel möglich ist. Spieltechnische Daten werden auch für Statistik genutzt, die bei Inforge (inforge.de) angezeigt werden. Es werden keine zusätlichen Daten für Statistik erhoben, die nicht bei Inforge angezeigt werden.</p>
        <h3 class="center-text">Rechte zu den Daten</h3>
        <p class="center-text">Datenlöschungen können nicht beantragt werden, da alle Daten, die zum Inforge Server geleitet werden nicht gespeichert werden und nur für die jeweilige Sitzung gilt. Es werden nur Statistikdaten dauerhaft gespeichert, die nicht auf Wunsch gelöscht werden können, weil die Statistikdaten sind nicht benutzerbezogen, so dass man die Daten nicht zurückverfolgen kann wer sie erzeugt hat.</p>
        <h3 class="center-text">Externes Hosting</h3>
        <p class="center-text">Diese Website und der Logikserver werden allein von Strato gehostet. Strato ist ein deutscher Anbieter und hast sich an die deutsche Regelungen zu halten. Die personenbezogenen Daten von Inforge, DiceBluff und FrameGame, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln. Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p>

        <h1 class="center-text">Nutzungsbedingungen (Inforge, DiceBluff, FrameGame)</h1>
        <h3 class="center-text">Datennutzung</h3>
        <p class="center-text">Durch den Zugriff auf die Inforge, DiceBluff und FrameGame Webseite erklären Sie sich mit diesen Nutzungsbedingungen und allen geltenden Gesetzen und Vorschriften sowie damit einverstanden, dass Sie für deren Einhaltung verantwortlich sind. Wenn Sie nicht einverstanden sind, ist es Ihnen untersagt, auf die Inforge Platform mit den zugehörigen Diensten zuzugreifen. Die in Inforge enthaltenen Materialien sind durch geltendes Urheberrecht und Markenrecht geschützt. Sollte enthaltenes Material gegen geltendes Urheberrecht verstoßen, bitten wir Sie, dies uns per E-Mail an jm.enns04@gmail.com mitzuteilen. Wir werden das betreffende Material unverzüglich entfernen. Wir behalten uns das Recht vor, die allgemeinen Geschäftsbedingungen und Datenschutzbestimmungen jederzeit zu ändern. Ihre fortgesetzte Nutzung der Inforgeplatform nach dem Veröffentlichen von Änderungen an dieser Richtlinie gilt als Ihre Zustimmung zu diesen Änderungen.</p>
        <h3 class="center-text">Anwendbares Recht</h3>
        <p class="center-text">Diese allgemeinen Geschäftsbedingungen unterliegen den deutschen Gesetzen und werden entsprechend ausgelegt. Sie unterliegen unwiderruflich der ausschließlichen Zuständigkeit der Gerichte in diesem Staat oder Ort.</p>
        <h3 class="center-text">Benutzerverhalten</h3>
        <p class="center-text">Sie müssen alle Benutzer mit Respekt behandeln und alle aktualisierten Bedingungen und Richtlinien erfüllen, die mit Inforge verbunden sind. Respektieren Sie andere Benutzer auf der Inforge Platform. Unangemessene Sprache und unangemessenes Verhalten sind verboten. Wir sind nicht verantwortlich für benutzergenerierte Inhalte wie Spitznamen, Begriffe und Zeichnungen. Die Benutzer sind für ihre Handlungen und die daraus resultierenden Konsequenzen verantwortlich.</p>
      </div>

    </div>

  </div>

</template>


<script>

import NavHeader from "@/components/views/NavHeader.vue";
import NavMobile from "@/components/views/NavMobile.vue";
import Header from "@/components/views/Header.vue";
import UIButton from "@/components/views/UIButton.vue";
import {nextTick} from "vue";

export default {
    name: "ImpressumPage",
  components: {UIButton, Header},
    data() {
        return {
        };
    },

    created() {
    },

    mounted() {
      nextTick(() => {
        this.scrollToHash();
      });
    },



    methods: {

      scrollToHash() {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            nextTick(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            })
          }
        }
      },

      onClickIntercra(){
        window.open('https://intercra.inforge.de', '_self');
      },

        getCookies(key){
            return this.$cookies.get(key);
        },
        setCookies(key, value){
          if(this.getCookies("allowedCookies") === "true"){
            this.$cookies.set(key, value, 2147483647);
          }
        },
    }
}
</script>