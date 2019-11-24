<template>
  <div class="container">
    <div class="headers">
      <h1 class="header--main">Nat Green</h1>
      <h3 class="header--small">Web Developer based in London, UK.</h3>
    </div>
    <div class="links">
      <a class="link" href="mailto:n@ngreen.io">
        <img class="link__img" src="@/assets/images/mail.svg" />
        Mail
      </a>
      <a class="link" target="_blank" href="https://github.com/nathanielgreen/">
        <img class="link__img" src="@/assets/images/github.svg" />
        Github
      </a>
      <a class="link" target="_blank" href="https://gitlab.com/nathanielgreen/">
        <img class="link__img" src="@/assets/images/gitlab.svg" />
        Gitlab
      </a>
      <a
        class="link"
        target="_blank"
        href="https://github.com/nathanielgreen/CV"
      >
        <img class="link__img" src="@/assets/images/file.svg" />
        CV
      </a>
      <a
        class="link"
        target="_blank"
        href="https://www.linkedin.com/in/nathaniel-g-727263107"
      >
        <img class="link__img" src="@/assets/images/user.svg" />
        LinkedIn
      </a>
      <a class="link" target="_blank" href="https://dev.to/nathanielgreen">
        <img class="link__img" src="@/assets/images/code.svg" />
        Dev.to
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.headers {
  margin: 40px;
  text-align: center;
}
.header--main {
  font-size: 56px;
  margin-bottom: 0;
}
.header--small {
  font-size: 26px;
}

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.links {
}
.link {
  margin: 0 15px;
  padding-bottom: 2px;
}
.link:hover {
  color: #222222;
  border-bottom: solid;
  border-width: 2px;
}
.link__img path {
  height: 20px;
  width: 20px;
}

@media (max-width: 37.5em) {
  .headers {
    margin: 10px;
  }
  .link {
    display: block;
    margin: 4px;
  }
}
</style>
