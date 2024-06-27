export default function render() {
    return `
    <form id="loginForm">
    <input type="text" id="username" name="username" class="input_" placeholder="bchifour"><br>
    <input type="password" id="password" name="password" class="input_" placeholder="********"><br>
    <input type="submit" value="Login" class="input_">
    <br> or </br>
    <div class="input_ center_">
        <a href="/register" class="link">Register</a>
    </div>
</form>
    `;
}