<!-- src/routes/__layout.svelte -->
<script>
  import { base } from '$app/paths';
</script>

<nav>
  <div class="header">
  Header--
  </div>
  <div class="nav-container">
		<div class="bio"> Image </div>
    <a href="{base}/"><button class="button">Home</button></a>
    <a href="{base}/about"><button class="button">About</button></a>
  </div>
</nav>

<div class="container">
  <!-- 페이지는 아래에 삽입됩니다 -->
	<div class="vertical-menu">
	vertical menu <br>
	vm <br>
	</div>
	<div class="page-container">
		<slot></slot>
  </div>
</div>

<style>
  .container {
    max-width: 1400px;
    margin: 50px auto;
		display : flex;
  }

	.bio {
		width : 100px;
	}

	.vertical-menu {
		width: 10%;
		background-color: #ED7D31;
	}

	.nav-container {
		display: flex;
	}

  .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>
