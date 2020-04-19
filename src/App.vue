<template>
    <div id="OHMYGA233">
        <viewHeader />
        <viewMain />
        <viewFooter />
    </div>
</template>

<script>
import viewHeader from '@/views/viewHeader'
import viewMain from '@/views/viewMain'
import viewFooter from '@/views/viewFooter'

export default {
    mounted() {
		// Dev
        if (process.env.NODE_ENV === 'production')
            this.$store.commit('Global/changeIsDev', false)
        else this.$store.commit('Global/changeIsDev', true)
	},
	components: {
        viewHeader,
        viewMain,
        viewFooter
    }
}
</script>

<style lang="less">
*,
body,
html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    background: 0 0;
    word-wrap: break-word;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    font-family: Titillium Web, -apple-system, system-ui, BlinkMacSystemFont,
        Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
        Helvetica Neue, sans-serif;
}

body {
    position: relative;
    background: #fdfcfc;
}

a {
    color: hsla(0, 0%, 0%, 0.28);
    text-decoration: none;
    font-weight: lighter;
    font-size: 12px;
    cursor: pointer;
}

#__SVG_SPRITE_NODE__ {
    display: none;
}

:not(body) {
    transition: all 0.5s cubic-bezier(0.22, 0.58, 0.12, 0.98);
}

/* ---- */
.TIP::after {
    position: absolute;
    bottom: 100%;
    left: 50%;
    z-index: 300;
    display: block;
    overflow: hidden;
    padding: 2px 5px;
    max-width: 320px;
    border-radius: 2px;
    background: rgba(79, 89, 95, 0.4);
    color: #fff;
    content: attr(data-tooltip);
    text-overflow: ellipsis;
    white-space: pre;
    font-weight: lighter;
    font-size: 0.7rem;
    line-height: 20px;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
    transform: translate(-50%, 0.4rem);
    pointer-events: none;
}

.TIP:focus::after,
.TIP:hover::after {
    opacity: 1;
    transform: translate(-50%, -0.2rem);
}

.Ribbon {
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #37eff9, #0091e4, #64c6f4, #64c0ec);
}

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.05);
    -webkit-appearance: none;
}

::-webkit-scrollbar-button,
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track,
::-webkit-scrollbar-track-piece {
    display: none;
    background: 0 0;
}

::-webkit-scrollbar-button,
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track,
::-webkit-scrollbar-track-piece {
    display: none;
    background: 0 0;
}

::-webkit-scrollbar-thumb {
    width: 4px;
    height: 4px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-button,
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track,
::-webkit-scrollbar-track-piece {
    display: none;
    background: 0 0;
}

::-webkit-scrollbar-button,
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track,
::-webkit-scrollbar-track-piece {
    display: none;
    background: 0 0;
}

::selection {
    background: #b2b8c1;
    color: #dc5351;
}
</style>
