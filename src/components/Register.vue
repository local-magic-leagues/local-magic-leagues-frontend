<template>
  <form name="registerForm">
    <h1>Join Magic Leagues Today!</h1>

    <div class="field-wrapper">
      <label for="email">Email Address</label>
      <input type="text" name="email" size="120" required />
    </div>
    <div class="field-wrapper">
      <label for="username">Username</label>
      <input type="text" name="username" :value="suggestedUsername" size="20" required />
    </div>
    <div class="field-wrapper">
      <label for="password">Password</label>
      <input type="password" name="password" required />
    </div>
  </form>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      suggestedUsername: 'mishras_twerkshop'
    }
  }
}
</script>
