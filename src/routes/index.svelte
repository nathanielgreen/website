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
				.link__img {
					height: 20px;
					width: 20px;
				}

		@media (max-width: 37.5em)  {
			.headers {
				margin: 10px;
			}
			.link {
				display: block;
				margin: 4px;
			}
		}
	</style>

	<svelte:head>
		<title>Nat Green | Web Developer</title>
	</svelte:head>


<div class="container">
    <div class="headers">
      <h1 class="header--main">Nat Green</h1>
      <h3 class="header--small">Web Developer based in London, UK.</h3>
    </div>
    <div class="links">
        <a class="link" href="mailto:n@ngreen.io">
          <img alt="email" class="link__img" src="images/mail.svg" />
          Mail
        </a>
        <a class="link" target="_blank" href="https://github.com/nathanielgreen/">
          <img alt="github logo" class="link__img" src="images/github.svg" />
          Github
        </a>
        <a class="link" target="_blank" href="https://gitlab.com/nathanielgreen/">
          <img alt="gitlab-logo" class="link__img" src="images/gitlab.svg" />
          Gitlab
        </a>
        <a class="link" target="_blank" href="https://github.com/nathanielgreen/CV">
          <img alt="file image" class="link__img" src="images/file.svg" />
          CV
        </a>
        <a	
          class="link"
          target="_blank"
          href="https://www.linkedin.com/in/nathaniel-g-727263107"
        >
          <img alt="linkedIn logo" class="link__img" src="images/linkedin.svg" />
          LinkedIn
        </a>
        <a class="link" target="_blank" href="https://dev.to/nathanielgreen">
          <img alt="code brakcets image" class="link__img" src="images/code.svg" />
          Dev.to
        </a>
    </div>
</div>
