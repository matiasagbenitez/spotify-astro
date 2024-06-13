<script lang="ts">
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";
  if (currentHour >= 3 && currentHour < 6) {
    greeting = "¡Ánimos! 🌚 Al que madruga Dios lo ayuda 🫵";
  } else if (currentHour >= 6 && currentHour < 11) {
    greeting = "¡Buenos días! 🌄 ¿Escuchamos algo de música?";
  } else if (currentHour >= 11 && currentHour < 16) {
    greeting = "¡Buenas tardes! 🌞 ¿Qué tal va el día?";
  } else if (currentHour >= 16 && currentHour < 20) {
    greeting = "¿Día agotador? 🌆🤯 ¡Hora de relajarse!";
  } else {
    greeting = "¡Buenas noches! 🌙 Una musiquita y a descansar 🫶";
  }
</script>

<h1 class="text-2xl font-bold pb-1">
  {greeting}
</h1>
