<template>
    <header>
        <div>

        </div>
    </header>
</template>

<script>
export default {
    components: {

    }
}
</script>

<style lang="less" scoped>
header {
    width: 100%;
    height: 58px;
    overflow: hidden;
    > div {
        position: relative;
        width: 980px;
        min-width: 60%;
        max-width: 100%;
        height: 100%;
        margin: 0 auto;
        padding: 0 35px;
        display: flex;
        align-items: center;
        .el-divider {
            margin: 0 2px 0 24px;
            height: 52%;
            /* background-color: hsla(0, 0%, 100%, 0.52); */
            background-color: transparent;
        }
    }
}
</style>