<template>
    <article class="oh">
        <div>
            <div ref="Doit">
                <h1
                    v-for="(v, index) in textArr"
                    :key="index"
                >{{ v }}</h1>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    mounted() {
        this.$nextTick(() => {
            this.timer = setInterval(() => this.Rua(), 2500)
        })
    },
    data() {
        return {
            textArr: [
                'OMG 机霸超大', '你等一下 我待会上门问候（雾', '那不行', '?????',
                '让我康康', '¿¿¿', '挖藕', '可是这是为什么呢', 'wow，awesome，这是我独有的moment'
            ],
            indexIs: 0,
            timer: ''
        }
    },
    methods: {
        Rua() {
            this.$refs.Doit.style.marginTop = '-72px'
            setTimeout(() => {
                this.textArr.push(this.textArr[0])
                this.textArr.shift()
                this.$refs.Doit.style.transition = 'unset'
                this.$refs.Doit.style.marginTop = 0
                setTimeout(() => this.$refs.Doit.style = '', 100)
            }, 500)
        }
    }
}
</script>

<style lang="less" scoped>
.oh {
    position: relative;
    height: calc(100vh - 118px);
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
        height: 82px;
        overflow: hidden;
        > div {
            text-align: center;
            > h1 {
                font-size: 62px;
                line-height: 1;
                color: #343147;
                margin: 10px;
            }
        }
    }
}
</style>