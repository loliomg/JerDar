<template>
    <main>
        <div>
            <div class="mainWrapper">

                <scrollText />

            </div>
        </div>
    </main>
</template>

<script>
import scrollText from '@/components/this/scrollText'
export default {
    components: {
        scrollText
    }
}
</script>

<style lang="less" scoped>
main {
    position: relative;
    height: calc(100vh - 118px);
    background-size: cover;
    background-position: 50%;
    overflow: initial;
    > div {
        width: 100%;
        padding: 0 25px;
        .mainWrapper {
            margin: 0 auto;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>