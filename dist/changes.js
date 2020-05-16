'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

{/* Tullaan uusimaan ja automatisoimaan joku päivä. Sori täst. */}

var Month = function (_React$Component) {
    _inherits(Month, _React$Component);

    function Month(props) {
        _classCallCheck(this, Month);

        var _this = _possibleConstructorReturn(this, (Month.__proto__ || Object.getPrototypeOf(Month)).call(this, props));

        _this.state = {
            month: _this.props.month, /* Aina pienellä esim. maaliskuu2019 */
            btntext: _this.props.btntext /* Normaalisti esim. Maaliskuu 2019 */
        };
        return _this;
    }

    _createClass(Month, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'card bg-transparent border-gold' },
                React.createElement(
                    'div',
                    { 'class': 'card-header', id: this.props.month + '_1' },
                    React.createElement(
                        'h5',
                        { 'class': 'mb-0' },
                        React.createElement(
                            'button',
                            { className: 'btn btn-link', type: 'button', 'data-toggle': 'collapse', 'data-target': '#' + this.props.month, 'aria-expanded': 'false', 'aria-controls': this.props.month },
                            this.props.btntext
                        )
                    )
                ),
                this.props.children
            );
        }
    }]);

    return Month;
}(React.Component);

var Body = function (_React$Component2) {
    _inherits(Body, _React$Component2);

    function Body(props) {
        _classCallCheck(this, Body);

        var _this2 = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

        _this2.state = {
            class: _this2.props.class,
            month: _this2.props.month
        };
        return _this2;
    }

    _createClass(Body, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: this.props.month, className: 'collapse ' + (this.props.showing ? 'show' : null), 'aria-labelledby': this.props.month + '_1', 'data-parent': '#muutokset' },
                React.createElement(
                    'div',
                    { className: 'card-body' },
                    this.props.children
                )
            );
        }
    }]);

    return Body;
}(React.Component);

var Dated = function Dated(props) {
    return React.createElement(
        'p',
        null,
        props.date
    );
};

var Change = function Change(props) {
    return React.createElement(
        'li',
        null,
        props.children
    );
};

var Changelog = function (_React$Component3) {
    _inherits(Changelog, _React$Component3);

    function Changelog() {
        _classCallCheck(this, Changelog);

        return _possibleConstructorReturn(this, (Changelog.__proto__ || Object.getPrototypeOf(Changelog)).apply(this, arguments));
    }

    _createClass(Changelog, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'accordion text-left' },
                React.createElement(
                    Month,
                    { month: 'toukokuu2020', btntext: 'Toukokuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'toukokuu2020', showing: true },
                        React.createElement(Dated, { date: '15.5.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Y\xF6 kelautuu nopeammin. Mit\xE4 useampi nukkuu, sit\xE4 nopeampi y\xF6.'
                            )
                        ),
                        React.createElement(Dated, { date: '14.5.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty komento /votestreak (nimi). Ilman nime\xE4 n\xE4kee oman voteputken.'
                            )
                        ),
                        React.createElement(Dated, { date: '11.5.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                '/discord komento korjattu'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Voten m\xE4\xE4r\xE4 pienennetty 75 -> 50 ja lis\xE4ksi tehty voteputket'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'huhtikuu2020', btntext: 'Huhtikuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'huhtikuu2020' },
                        React.createElement(
                            'p',
                            null,
                            'Mit\xE4\xE4n ei tapahtunut.'
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'maaliskuu2020', btntext: 'Maaliskuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'maaliskuu2020' },
                        React.createElement(Dated, { date: '27.3.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty seuraavat komennot: /j\xF6ms /retu /tank /ash'
                            )
                        ),
                        React.createElement(Dated, { date: '22.3.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Spawnereita voi taas muuttaa creeper- ja squid-spawnereiksi'
                            ),
                            React.createElement(
                                Change,
                                null,
                                '/vote ei avaa en\xE4\xE4 valikkoa. Chattiin tulee molemmat linkit.'
                            )
                        ),
                        React.createElement(Dated, { date: '18.3.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'lis\xE4tty uusia shortcutkomentoja /nax, /nubbe, /skidaddleskidoodle [/nou, /reverse, /unoreverse]'
                            )
                        ),
                        React.createElement(Dated, { date: '12.3.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Granite, diorite, andesite, cobble, stone voi nyt sulattaa blast furnacessa graveliksi'
                            )
                        ),
                        React.createElement(Dated, { date: '9.3.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Uusi komento /alue. N\xE4ytt\xE4\xE4 alueen nimen.'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'helmikuu2020', btntext: 'Helmikuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'helmikuu2020' },
                        React.createElement(Dated, { date: '24.2.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                '/radio toimii taas'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Uusi komento /music'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Sillanrakennus poistettu k\xE4yt\xF6st\xE4 monistusglitchin takia'
                            )
                        ),
                        React.createElement(Dated, { date: '16.2.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Map reset'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'tammikuu2020', btntext: 'Tammikuu 2020' },
                    React.createElement(
                        Body,
                        { month: 'tammikuu2020' },
                        React.createElement(Dated, { date: '16.1.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                '/tk tuotu takaisin'
                            )
                        ),
                        React.createElement(Dated, { date: '13.1.2020' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Vote korjattu'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'joulukuu2019', btntext: 'Joulukuu 2019' },
                    React.createElement(
                        Body,
                        { month: 'joulukuu2019' },
                        React.createElement(Dated, { date: '13.12.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty /ignore (/ignore add nimi, /ignore list, /ignore remove nimi)'
                            )
                        ),
                        React.createElement(Dated, { date: '11.12.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty Bedrock versiosta tuttu sillanrakennusominaisuus'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty uusi resepti: 6 lasipaneelia -> glass block '
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty uusi resepti uuniin: stainded glass -> glass block'
                            )
                        ),
                        React.createElement(Dated, { date: '10.12.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Rankkikohtaiset kotien m\xE4\xE4r\xE4t korjattu'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Spawnerien otto silktouchilla ja ilman silktouchia korjattu'
                            )
                        ),
                        React.createElement(Dated, { date: '7.12.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Tabin serverv\xE4rej\xE4 paranneltu'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Taikamaton kanssa ei en\xE4\xE4 ota fall damagea'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Entiteetit eiv\xE4t ota damagea taikamaton sivuista'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Permiplugin osaa k\xE4sitell\xE4 offline pelaajia, ja pystyy asettamaan oikeuksia ilman relogia'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Korjattu coreplugarin komennonsuorittajasta komponenttibugi'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'marraskuu2019', btntext: 'Marraskuu 2019' },
                    React.createElement(
                        Body,
                        { month: 'marraskuu2019' },
                        React.createElement(Dated, { date: '30.11.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Korjattu prismarine slabien muunaminen t\xE4ys blockeiksi'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty mahdollisuus muuntaa Blast Furnacella hiilipalikoista mustaa v\xE4riainetta'
                            )
                        ),
                        React.createElement(Dated, { date: '22.11.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Discord chatin v\xE4rit korjattu'
                            )
                        ),
                        React.createElement(Dated, { date: '16.11.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Tuomas veturi p\xE4ivitetty'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Looppaus + random toimii nyt'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Voikukat korjattu'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'lokakuu2019', btntext: 'Lokakuu 2019' },
                    React.createElement(
                        Body,
                        { month: 'lokakuu2019' },
                        React.createElement(Dated, { date: '31.10.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                '/sit tuotu takaisin'
                            )
                        ),
                        React.createElement(Dated, { date: '26.10.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                '/vote toimii taas'
                            ),
                            React.createElement(
                                Change,
                                null,
                                '(Realistinen) el\xE4intenkanto takaisin servulla'
                            )
                        ),
                        React.createElement(Dated, { date: '25.10.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                '/nime\xE4 komento lis\xE4tty palvelimelle'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty yll\xE4pidolle /setsign'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Korjattu viestibugi /nick player nick -komennossa (koskien yll\xE4pitoa)'
                            ),
                            React.createElement(
                                Change,
                                null,
                                '/baltop korjattu'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'syyskuu2019', btntext: 'Syyskuu 2019' },
                    React.createElement(
                        Body,
                        { month: 'syyskuu2019', showing: false },
                        React.createElement(Dated, { date: '25.09.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Tpa:n /back fixattu oikeiden pelaajien sijaintiin'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'mobGriefing asetettu takaisin p\xE4\xE4lle'
                            )
                        ),
                        React.createElement(Dated, { date: '24.09.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Tp:n ja /spawn komennon /back tallentaa nyt sijainnin'
                            )
                        ),
                        React.createElement(Dated, { date: '21.09.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                '/kms ja /kys lis\xE4tty'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Spawnerit putoaa taas Silk Touch -enchantilla'
                            )
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'elokuu2019', btntext: 'Elokuu 2019' },
                    React.createElement(
                        Body,
                        { month: 'elokuu2019', showing: false },
                        React.createElement(Dated, { date: '19.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Coreprotect osaa nyt tallentaa lent\xE4v\xE4t blockit'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Tnt ja tnt_minecart ei en\xE4\xE4 lenn\xE4t\xE4 niin paljon blockei -> parempia raivaukseen'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty custom recipet servulle'
                            )
                        ),
                        React.createElement(Dated, { date: '17.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Paranneltu databasen k\xE4ytt\xF6\xF6: StatManager, Karanteenials, KaranteeniPerms, Chatar'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Mahdollisesti v\xE4hennetty joinauksesta seuraavaa lagia: KaranteeniPerms, Karanteenials, KaranteeniCore, StatManager, Chatar (vaihdettu db sync -> async. jos ongelmia ilmenee niin ilmoittakaa)'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Lis\xE4tty automaattinen restart (yp k\xE4ytt\xE4k\xE4\xE4 komentoa /restarter:restart)'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Poistettu virheellisi\xE4 blockeja taikamatosta'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'L\xF6ydetty ISO bugi timereista joka johti siihen ett\xE4 kaikki timerit ajettiin joka tickill\xE4. Nyt fixattu, hyv\xE4ll\xE4 tuurilla isoja vaikutuksia tehokkuuteen'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Operaattorista yl\xF6sp\xE4in oikat /player kill nimi'
                            )
                        ),
                        React.createElement(Dated, { date: '16.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                '/rtp toimii, aiempaa nopeampi ja ei mene veden alle'
                            )
                        ),
                        React.createElement(Dated, { date: '13.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Fixattu "ep\xE4turvallinen sijainti" teleportatessa'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Fixattu puuttunut \xE4\xE4ni kotiin teleportatessa'
                            ),
                            React.createElement(
                                Change,
                                null,
                                '/rtp tehostettu'
                            ),
                            React.createElement(
                                Change,
                                null,
                                'Fixattu rtp veden alle vienti'
                            )
                        ),
                        React.createElement(Dated, { date: '11.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                Change,
                                null,
                                'Uusi versio ja uudet kujeet. 1.14 on saapunut.'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Changelog;
}(React.Component);

ReactDOM.render(React.createElement(Changelog, null), document.getElementById('muutokset'));