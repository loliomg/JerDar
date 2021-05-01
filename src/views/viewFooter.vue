<template>
    <footer class="An">
        <div>
            <a
                class="NAVIGATOR An"
                target="_blank"
                href="https://www.futiwolf.com"
            >
                <isIcon i="futi"></isIcon>
                <div
                    class="thank TIP"
                    data-tooltip="⚡Navigator Kepler"
                >Drawn by NAVILAB</div>
            </a>
            <div class="mainFoo">
                <div>
                    <div class="Ribbon"></div>
                    <p class="An">Copyright © 2020 - {{ (new Date().getFullYear()) }} <a
                            href="https://www.lf112.net/"
                            target="_blank"
                            data-tooltip="Dev"
                            class="LF TIP"
                        >LF112</a> All Rights Reserved.</p>
                    <span class="Nbsp">/</span>
                    <p>Presented to <a
                            class="TIP"
                            href="https://github.com/bakaomg"
                            rel="noopener noreferrer"
                            target="_blank"
                            data-tooltip="ohmyga"
                        >@bakaomg</a></p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="less" scoped>
footer {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    > div {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        .NAVIGATOR {
            text-align: center;
            position: relative;
            display: inline-block;
            padding: 15px 5px;
            > svg {
                width: 62px;
                height: 28px;
                margin-bottom: -6px;
            }
            .thank {
                color: hsla(0, 0%, 45.1%, 0.12);
                font-size: 12px;
                margin-top: -20px;
            }
        }
        .mainFoo {
            height: 32px;
            position: relative;
            padding-left: 20px;
            padding-top: 5px;
            border-left: 1px solid hsla(0, 0%, 76.5%, 0.28);
            > div {
                display: flex;
                position: relative;
                .Ribbon {
                    position: absolute;
                    height: 3px;
                    background: linear-gradient(
                        90deg,
                        hsla(0, 0%, 46.7%, 0.2),
                        rgba(72, 72, 72, 0.2),
                        hsla(0, 0%, 40.4%, 0.2),
                        rgba(60, 60, 60, 0.2)
                    );
                }
                > p,
                span {
                    line-height: 28px;
                    font-size: 12px;
                    color: hsla(0, 0%, 0%, 0.28);
                    font-weight: lighter;
                }
                .LF {
                    font-family: fontOne;
                    color: hsla(0, 0%, 0%, 0.36);
                    font-weight: 700;
                }
                .Nbsp {
                    padding: 0 8px;
                    font-weight: lighter;
                }
            }
        }
    }
}
@media screen and (max-width: 780px) {
    footer {
        > div {
            display: inline-grid;
            .mainFoo {
                padding: 0 10%;
                border-left: unset;
                > div {
                    display: inline-grid;
                    width: 100%;
                    text-align: center;
                    .Nbsp {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>