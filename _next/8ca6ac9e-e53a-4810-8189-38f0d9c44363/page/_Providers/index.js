
          window.__NEXT_REGISTER_PAGE('/_Providers', function() {
            var comp = module.exports=webpackJsonp([11],{374:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Tracker=void 0;var o=n(13),a=r(o),u=n(7),i=r(u),c=n(8),l=r(c),s=n(15),d=r(s),f=n(14),p=r(f),h=n(1),k=(r(h),n(95)),v=r(k),y=n(367),_=r(y),w=n(346);r(w);(e.Tracker=function(t){function e(t){(0,i.default)(this,e);var n=(0,d.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t));return n.state={track:null},n}return(0,p.default)(e,t),(0,l.default)(e,[{key:"componentDidMount",value:function(){if(null===this.state.track){var t=(0,_.default)(this.props.analytics);t.start(),t.page.visit({url:window.location.pathname}),v.default.routeChangeComplete=function(e){t.page.visit({url:e})};var e=function(e,n){try{t.create(e,n),void 0!==window.fbq&&window.fbq(e,n)}catch(t){console.error(t)}};this.setState({track:e})}}},{key:"getChildContext",value:function(){return{track:this.state.track}}},{key:"render",value:function(){return h.Children.only(this.props.children)}}]),e}(h.Component)).childContextTypes={track:h.PropTypes.func}},862:function(t,e,n){t.exports=n(374)}},[862]);
            return { page: comp.default }
          })
        