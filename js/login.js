export default function render() {
    return `<nav class="nav">
    <div class="Dashboard">
        <a href="/" class="nav__link " data-link>
            <i class="fas fa-tachometer-alt"></i> Game
        </a>
        <a href="/posts" class="nav__link " data-link>
            <i class="far fa-comment-alt"></i> Chat
        </a>
        <a href="/settings" class="nav__link " data-link>
            <i class="fas fa-cog"></i> Settings
        </a>
    </div>

</nav>`;
}