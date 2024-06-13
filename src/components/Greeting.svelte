<script lang="ts">
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";
  if (currentHour < 6 && currentHour >= 3) {
    greeting = "¡Wow! 🌚 Ánimos, al que madruga Dios lo ayuda 🫵";
  } else if (currentHour < 11) {
    greeting = "¡Buenos días su señoría! 🌄 ¿Escuchamos algo de música?";
  } else if (currentHour < 16) {
    greeting = "¡Buenas tardes! 🌞 ¿Qué tal va el día?";
  } else if (currentHour < 20) {
    greeting = "¿Cómo estuvo el día? 🌆🤯 ¿Planes para la cena?";
  } else {
    greeting = "¡Buenas noches! 🌙 Una musiquita y a descansar 🫶";
  }
</script>

<h1 class="text-3xl py-2 font-bold">
  {greeting}
</h1>
