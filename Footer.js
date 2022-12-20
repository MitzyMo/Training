class MnFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
    <footer">
    <div class="footer">
        <p>Author: Mercy Mo<br>
        <a href="mailto:hege@example.com">Mercy'sEmail@domain.com</a><br>
        © 2022 Copyright <br>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-google"></a>
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-youtube"></a>
        </p>    
    </div>
</footer>
  `;

	}
}

customElements.define('mn-footer', MnFooter);