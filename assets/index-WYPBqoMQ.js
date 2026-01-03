(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Ko="181",Ku=0,Wl=1,Ju=2,Ph=1,Lh=2,zn=3,Xn=0,$t=1,dn=2,Gn=0,Gi=1,Xl=2,ql=3,jl=4,Zu=5,gi=100,Qu=101,ed=102,td=103,nd=104,id=200,sd=201,rd=202,ad=203,Ja=204,Za=205,od=206,ld=207,cd=208,hd=209,ud=210,dd=211,fd=212,pd=213,md=214,Qa=0,eo=1,to=2,ji=3,no=4,io=5,so=6,ro=7,Ih=0,gd=1,xd=2,ri=0,_d=1,vd=2,bd=3,yd=4,wd=5,Sd=6,Md=7,$l="attached",Ed="detached",Dh=300,$i=301,Yi=302,ao=303,oo=304,jr=306,Ki=1e3,En=1001,kr=1002,Wt=1003,Uh=1004,Ts=1005,Bt=1006,Pr=1007,Vn=1008,Rn=1009,Nh=1010,Fh=1011,Ds=1012,Jo=1013,vi=1014,pn=1015,as=1016,Zo=1017,Qo=1018,Us=1020,Oh=35902,Bh=35899,kh=1021,zh=1022,on=1023,Ns=1026,Fs=1027,el=1028,tl=1029,nl=1030,il=1031,sl=1033,Lr=33776,Ir=33777,Dr=33778,Ur=33779,lo=35840,co=35841,ho=35842,uo=35843,fo=36196,po=37492,mo=37496,go=37808,xo=37809,_o=37810,vo=37811,bo=37812,yo=37813,wo=37814,So=37815,Mo=37816,Eo=37817,To=37818,Co=37819,Ao=37820,Ro=37821,Po=36492,Lo=36494,Io=36495,Do=36283,Uo=36284,No=36285,Fo=36286,Os=2300,Bs=2301,ca=2302,Yl=2400,Kl=2401,Jl=2402,Td=2500,Cd=0,Vh=1,Oo=2,Ad=3200,Rd=3201,Hh=0,Pd=1,ni="",It="srgb",Xt="srgb-linear",zr="linear",lt="srgb",Si=7680,Zl=519,Ld=512,Id=513,Dd=514,Gh=515,Ud=516,Nd=517,Fd=518,Od=519,Bo=35044,Ql="300 es",Tn=2e3,Vr=2001;function Wh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bd(){const s=ks("canvas");return s.style.display="block",s}const ec={};function Hr(...s){const e="THREE."+s.shift();console.log(e,...s)}function ye(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Xe(...s){const e="THREE."+s.shift();console.error(e,...s)}function zs(...s){const e=s.join(" ");e in ec||(ec[e]=!0,ye(...s))}function kd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tc=1234567;const Wi=Math.PI/180,Ji=180/Math.PI;function mn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[s&255]+Nt[s>>8&255]+Nt[s>>16&255]+Nt[s>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ge(s,e,t){return Math.max(e,Math.min(t,s))}function rl(s,e){return(s%e+e)%e}function zd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Vd(s,e,t){return s!==e?(t-s)/(e-s):0}function As(s,e,t){return(1-t)*s+t*e}function Hd(s,e,t,n){return As(s,e,1-Math.exp(-t*n))}function Gd(s,e=1){return e-Math.abs(rl(s,e*2)-e)}function Wd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Xd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function qd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function jd(s,e){return s+Math.random()*(e-s)}function $d(s){return s*(.5-Math.random())}function Yd(s){s!==void 0&&(tc=s);let e=tc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kd(s){return s*Wi}function Jd(s){return s*Ji}function Zd(s){return(s&s-1)===0&&s!==0}function Qd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ef(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function tf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Mt={DEG2RAD:Wi,RAD2DEG:Ji,generateUUID:mn,clamp:Ge,euclideanModulo:rl,mapLinear:zd,inverseLerp:Vd,lerp:As,damp:Hd,pingpong:Gd,smoothstep:Wd,smootherstep:Xd,randInt:qd,randFloat:jd,randFloatSpread:$d,seededRandom:Yd,degToRad:Kd,radToDeg:Jd,isPowerOfTwo:Zd,ceilPowerOfTwo:Qd,floorPowerOfTwo:ef,setQuaternionFromProperEuler:tf,normalize:st,denormalize:fn};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ai{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const w=Math.acos(m),v=Math.sin(w);p=Math.sin(p*w)/v,o=Math.sin(o*w)/v,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+x*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+x*o;const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new I,nc=new ai;class Ve{constructor(e,t,n,i,r,a,o,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],w=i[1],v=i[4],E=i[7],C=i[2],M=i[5],A=i[8];return r[0]=a*x+o*w+c*C,r[3]=a*m+o*v+c*M,r[6]=a*p+o*E+c*A,r[1]=l*x+h*w+u*C,r[4]=l*m+h*v+u*M,r[7]=l*p+h*E+u*A,r[2]=d*x+f*w+g*C,r[5]=d*m+f*v+g*M,r[8]=d*p+f*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new Ve,ic=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nf(){const s={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ni?zr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Xt]:{primaries:e,whitePoint:n,transfer:zr,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),s}const Ze=nf();function Wn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Mi;class sf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=ks("canvas")),Mi.width=e.width,Mi.height=e.height;const i=Mi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rf=0;class al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(da(i[a].image)):r.push(da(i[a]))}else r=da(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ye("Texture: Unable to serialize Texture."),{})}let af=0;const fa=new I;class Et extends yi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=En,i=En,r=Bt,a=Vn,o=on,c=Rn,l=Et.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=mn(),this.name="",this.source=new al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fa).x}get height(){return this.source.getSize(fa).y}get depth(){return this.source.getSize(fa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ye(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Dh;Et.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,E=(f+1)/2,C=(p+1)/2,M=(h+d)/4,A=(u+x)/4,N=(g+m)/4;return v>E&&v>C?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=M/n,r=A/n):E>C?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=M/i,r=N/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=A/r,i=N/r),this.set(n,i,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-x)/w,this.z=(d-h)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class of extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Et(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new al(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends of{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xh extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lf extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),Zs.subVectors(this.max,fs),Ei.subVectors(e.a,fs),Ti.subVectors(e.b,fs),Ci.subVectors(e.c,fs),jn.subVectors(Ti,Ei),$n.subVectors(Ci,Ti),ci.subVectors(Ei,Ci);let t=[0,-jn.z,jn.y,0,-$n.z,$n.y,0,-ci.z,ci.y,jn.z,0,-jn.x,$n.z,0,-$n.x,ci.z,0,-ci.x,-jn.y,jn.x,0,-$n.y,$n.x,0,-ci.y,ci.x,0];return!pa(t,Ei,Ti,Ci,Zs)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,Ei,Ti,Ci,Zs))?!1:(Qs.crossVectors(jn,$n),t=[Qs.x,Qs.y,Qs.z],pa(t,Ei,Ti,Ci,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Dn=[new I,new I,new I,new I,new I,new I,new I,new I],cn=new I,Js=new qn,Ei=new I,Ti=new I,Ci=new I,jn=new I,$n=new I,ci=new I,fs=new I,Zs=new I,Qs=new I,hi=new I;function pa(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){hi.fromArray(s,r);const o=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),c=e.dot(hi),l=t.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const cf=new qn,ps=new I,ma=new I;class Ln{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(ma)),this.expandByPoint(ps.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Un=new I,ga=new I,er=new I,Yn=new I,xa=new I,tr=new I,_a=new I;class Ws{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ga.copy(e).add(t).multiplyScalar(.5),er.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(ga);const r=e.distanceTo(t)*.5,a=-this.direction.dot(er),o=Yn.dot(this.direction),c=-Yn.dot(er),l=Yn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ga).addScaledVector(er,d),f}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,i,r){xa.subVectors(t,e),tr.subVectors(n,e),_a.crossVectors(xa,tr);let a=this.direction.dot(_a),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);const c=o*this.direction.dot(tr.crossVectors(Yn,tr));if(c<0)return null;const l=o*this.direction.dot(xa.cross(Yn));if(l<0||c+l>a)return null;const h=-o*Yn.dot(_a);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,g,x,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,x,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hf,e,uf)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Kn.crossVectors(n,Jt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Kn.crossVectors(n,Jt)),Kn.normalize(),nr.crossVectors(Jt,Kn),i[0]=Kn.x,i[4]=nr.x,i[8]=Jt.x,i[1]=Kn.y,i[5]=nr.y,i[9]=Jt.y,i[2]=Kn.z,i[6]=nr.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],v=n[7],E=n[11],C=n[15],M=i[0],A=i[4],N=i[8],S=i[12],b=i[1],P=i[5],O=i[9],V=i[13],Y=i[2],W=i[6],q=i[10],J=i[14],H=i[3],X=i[7],ne=i[11],ge=i[15];return r[0]=a*M+o*b+c*Y+l*H,r[4]=a*A+o*P+c*W+l*X,r[8]=a*N+o*O+c*q+l*ne,r[12]=a*S+o*V+c*J+l*ge,r[1]=h*M+u*b+d*Y+f*H,r[5]=h*A+u*P+d*W+f*X,r[9]=h*N+u*O+d*q+f*ne,r[13]=h*S+u*V+d*J+f*ge,r[2]=g*M+x*b+m*Y+p*H,r[6]=g*A+x*P+m*W+p*X,r[10]=g*N+x*O+m*q+p*ne,r[14]=g*S+x*V+m*J+p*ge,r[3]=w*M+v*b+E*Y+C*H,r[7]=w*A+v*P+E*W+C*X,r[11]=w*N+v*O+E*q+C*ne,r[15]=w*S+v*V+E*J+C*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+x*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],w=u*m*l-x*d*l+x*c*f-o*m*f-u*c*p+o*d*p,v=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,E=h*x*l-g*u*l+g*o*f-a*x*f-h*o*p+a*u*p,C=g*u*c-h*x*c-g*o*d+a*x*d+h*o*m-a*u*m,M=t*w+n*v+i*E+r*C;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=w*A,e[1]=(x*d*r-u*m*r-x*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(o*m*r-x*c*r+x*i*l-n*m*l-o*i*p+n*c*p)*A,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*A,e[4]=v*A,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*A,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*A,e[8]=E*A,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*A,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*A,e[12]=C*A,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*m+t*u*m)*A,e[14]=(g*o*i-a*x*i-g*n*c+t*x*c+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,w=c*l,v=c*h,E=c*u,C=n.x,M=n.y,A=n.z;return i[0]=(1-(x+p))*C,i[1]=(f+E)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(f-E)*M,i[5]=(1-(d+p))*M,i[6]=(m+w)*M,i[7]=0,i[8]=(g+v)*A,i[9]=(m-w)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ai.set(i[0],i[1],i[2]).length();const a=Ai.set(i[4],i[5],i[6]).length(),o=Ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);const l=1/r,h=1/a,u=1/o;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Tn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Tn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Vr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Tn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Tn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Vr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new I,hn=new Be,hf=new I(0,0,0),uf=new I(1,1,1),Kn=new I,nr=new I,Jt=new I,rc=new Be,ac=new ai;class St{constructor(e=0,t=0,n=0,i=St.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ac.setFromEuler(this),this.setFromQuaternion(ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}St.DEFAULT_ORDER="XYZ";class ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let df=0;const oc=new I,Ri=new ai,Nn=new Be,ir=new I,ms=new I,ff=new I,pf=new ai,lc=new I(1,0,0),cc=new I(0,1,0),hc=new I(0,0,1),uc={type:"added"},mf={type:"removed"},Pi={type:"childadded",child:null},va={type:"childremoved",child:null};class dt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new I,t=new St,n=new ai,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new Ve}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(lc,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(hc,e)}translateOnAxis(e,t){return oc.copy(e).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lc,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ir.copy(e):ir.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ms,ir,this.up):Nn.lookAt(ir,ms,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uc),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mf),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uc),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new I(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new I,Fn=new I,ba=new I,On=new I,Li=new I,Ii=new I,dc=new I,ya=new I,wa=new I,Sa=new I,Ma=new it,Ea=new it,Ta=new it;class an{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){un.subVectors(i,t),Fn.subVectors(n,t),ba.subVectors(e,t);const a=un.dot(un),o=un.dot(Fn),c=un.dot(ba),l=Fn.dot(Fn),h=Fn.dot(ba),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ma.setScalar(0),Ea.setScalar(0),Ta.setScalar(0),Ma.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,n),Ta.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ma,r.x),a.addScaledVector(Ea,r.y),a.addScaledVector(Ta,r.z),a}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),Fn.subVectors(e,t),un.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),un.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Li.subVectors(i,n),Ii.subVectors(r,n),ya.subVectors(e,n);const c=Li.dot(ya),l=Ii.dot(ya);if(c<=0&&l<=0)return t.copy(n);wa.subVectors(e,i);const h=Li.dot(wa),u=Ii.dot(wa);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Li,a);Sa.subVectors(e,r);const f=Li.dot(Sa),g=Ii.dot(Sa);if(g>=0&&f<=g)return t.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ii,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return dc.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(dc,o);const p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Li,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Ca(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=rl(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ca(a,r,e+1/3),this.g=Ca(a,r,e),this.b=Ca(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&ye("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ye("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=qh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Ze.workingToColorSpace(Ft.copy(this),e),Math.round(Ge(Ft.r*255,0,255))*65536+Math.round(Ge(Ft.g*255,0,255))*256+Math.round(Ge(Ft.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,r=Ft.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=It){Ze.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(sr);const n=As(Jn.h,sr.h,t),i=As(Jn.s,sr.s,t),r=As(Jn.l,sr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ee;Ee.NAMES=qh;let gf=0;class Cn extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Gi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Za,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ye(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wt extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new St,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new I,rr=new We;let xf=0;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bo,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rr.fromBufferAttribute(this,t),rr.applyMatrix3(e),this.setXY(t,rr.x,rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bo&&(e.usage=this.usage),e}}class jh extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $h extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dt extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _f=0;const tn=new Be,Aa=new dt,Di=new I,Zt=new qn,gs=new qn,Pt=new I;class Ct extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wh(e)?$h:jh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Zt.min,gs.min),Zt.expandByPoint(Pt),Pt.addVectors(Zt.max,gs.max),Zt.expandByPoint(Pt)):(Zt.expandByPoint(gs.min),Zt.expandByPoint(gs.max))}Zt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pt.fromBufferAttribute(o,l),c&&(Di.fromBufferAttribute(e,l),Pt.add(Di)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new I,c[N]=new I;const l=new I,h=new I,u=new I,d=new We,f=new We,g=new We,x=new I,m=new I;function p(N,S,b){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[N].add(x),o[S].add(x),o[b].add(x),c[N].add(m),c[S].add(m),c[b].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,S=w.length;N<S;++N){const b=w[N],P=b.start,O=b.count;for(let V=P,Y=P+O;V<Y;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const v=new I,E=new I,C=new I,M=new I;function A(N){C.fromBufferAttribute(i,N),M.copy(C);const S=o[N];v.copy(S),v.sub(C.multiplyScalar(C.dot(S))).normalize(),E.crossVectors(M,S);const P=E.dot(c[N])<0?-1:1;a.setXYZW(N,v.x,v.y,v.z,P)}for(let N=0,S=w.length;N<S;++N){const b=w[N],P=b.start,O=b.count;for(let V=P,Y=P+O;V<Y;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Tt(d,h,u)}if(this.index===null)return ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new Be,ui=new Ws,ar=new Ln,pc=new I,or=new I,lr=new I,cr=new I,Ra=new I,hr=new I,mc=new I,ur=new I;class ct extends dt{constructor(e=new Ct,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Ra.fromBufferAttribute(u,e),a?hr.addScaledVector(Ra,h):hr.addScaledVector(Ra.sub(t),h))}t.add(hr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(ar.containsPoint(ui.origin)===!1&&(ui.intersectSphere(ar,pc)===null||ui.origin.distanceToSquared(pc)>(e.far-e.near)**2))&&(fc.copy(r).invert(),ui.copy(e.ray).applyMatrix4(fc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=w,C=v;E<C;E+=3){const M=o.getX(E),A=o.getX(E+1),N=o.getX(E+2);i=dr(this,p,e,n,l,h,u,M,A,N),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=o.getX(m),v=o.getX(m+1),E=o.getX(m+2);i=dr(this,a,e,n,l,h,u,w,v,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=w,C=v;E<C;E+=3){const M=E,A=E+1,N=E+2;i=dr(this,p,e,n,l,h,u,M,A,N),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=m,v=m+1,E=m+2;i=dr(this,a,e,n,l,h,u,w,v,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function vf(s,e,t,n,i,r,a,o){let c;if(e.side===$t?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Xn,o),c===null)return null;ur.copy(o),ur.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ur);return l<t.near||l>t.far?null:{distance:l,point:ur.clone(),object:s}}function dr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,or),s.getVertexPosition(c,lr),s.getVertexPosition(l,cr);const h=vf(s,e,t,n,or,lr,cr,mc);if(h){const u=new I;an.getBarycoord(mc,or,lr,cr,u),i&&(h.uv=an.getInterpolatedAttribute(i,o,c,l,u,new We)),r&&(h.uv1=an.getInterpolatedAttribute(r,o,c,l,u,new We)),a&&(h.normal=an.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};an.getNormal(or,lr,cr,d.normal),h.face=d,h.barycoord=u}return h}class Ht extends Ct{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(u,2));function g(x,m,p,w,v,E,C,M,A,N,S){const b=E/A,P=C/N,O=E/2,V=C/2,Y=M/2,W=A+1,q=N+1;let J=0,H=0;const X=new I;for(let ne=0;ne<q;ne++){const ge=ne*P-V;for(let ke=0;ke<W;ke++){const Je=ke*b-O;X[x]=Je*w,X[m]=ge*v,X[p]=Y,l.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=M>0?1:-1,h.push(X.x,X.y,X.z),u.push(ke/A),u.push(1-ne/N),J+=1}}for(let ne=0;ne<N;ne++)for(let ge=0;ge<A;ge++){const ke=d+ge+W*ne,Je=d+ge+W*(ne+1),je=d+(ge+1)+W*(ne+1),$e=d+(ge+1)+W*ne;c.push(ke,Je,$e),c.push(Je,je,$e),H+=6}o.addGroup(f,H,S),f+=H,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(s){const e={};for(let t=0;t<s.length;t++){const n=Zi(s[t]);for(const i in n)e[i]=n[i]}return e}function bf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const yf={clone:Zi,merge:Vt};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kh extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new I,gc=new We,xc=new We;class Gt extends Kh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Wi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,gc,xc),t.subVectors(xc,gc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Ni=1;class Mf extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(Ui,Ni,e,t);i.layers=this.layers,this.add(i);const r=new Gt(Ui,Ni,e,t);r.layers=this.layers,this.add(r);const a=new Gt(Ui,Ni,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Ui,Ni,e,t);o.layers=this.layers,this.add(o);const c=new Gt(Ui,Ni,e,t);c.layers=this.layers,this.add(c);const l=new Gt(Ui,Ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jh extends Et{constructor(e=[],t=$i,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ef extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ht(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Gn});r.uniforms.tEquirect.value=t;const a=new ct(i,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Bt),new Mf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class ii extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tf={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Cf extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new St,this.environmentIntensity=1,this.environmentRotation=new St,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Af{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bo,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new I;class ll{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ll(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _c=new I,vc=new it,bc=new it,Rf=new I,yc=new Be,fr=new I,La=new Ln,wc=new Be,Ia=new Ws;class Pf extends ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$l,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fr),this.boundingBox.expandByPoint(fr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fr),this.boundingSphere.expandByPoint(fr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(i),e.ray.intersectsSphere(La)!==!1&&(wc.copy(i).invert(),Ia.copy(e.ray).applyMatrix4(wc),!(this.boundingBox!==null&&Ia.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ia)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$l?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ed?this.bindMatrixInverse.copy(this.bindMatrix).invert():ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;vc.fromBufferAttribute(i.attributes.skinIndex,e),bc.fromBufferAttribute(i.attributes.skinWeight,e),_c.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=bc.getComponent(r);if(a!==0){const o=vc.getComponent(r);yc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Rf.copy(_c).applyMatrix4(yc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zh extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cl extends Et{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Wt,h=Wt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sc=new Be,Lf=new Be;class hl{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Lf;Sc.multiplyMatrices(o,t[r]),Sc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new hl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new cl(t,e,e,on,pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(ye("Skeleton: No bone found with UUID:",r),a=new Zh),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ko extends Tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fi=new Be,Mc=new Be,pr=[],Ec=new qn,If=new Be,xs=new ct,_s=new Ln;class Df extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ko(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,If)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),Ec.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Ec)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),_s.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(_s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),e.ray.intersectsSphere(_s)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fi),Mc.multiplyMatrices(n,Fi),xs.matrixWorld=Mc,xs.raycast(e,pr);for(let a=0,o=pr.length;a<o;a++){const c=pr[a];c.instanceId=r,c.object=this,t.push(c)}pr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new cl(new Float32Array(i*this.count),i,this.count,el,pn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Da=new I,Uf=new I,Nf=new Ve;class ti{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Da.subVectors(n,t).cross(Uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nf.getNormalMatrix(e),i=this.coplanarPoint(Da).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Ln,Ff=new We(.5,.5),mr=new I;class ul{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,a=new ti){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],w=r[12],v=r[13],E=r[14],C=r[15];if(i[0].setComponents(l-a,f-h,p-g,C-w).normalize(),i[1].setComponents(l+a,f+h,p+g,C+w).normalize(),i[2].setComponents(l+o,f+u,p+x,C+v).normalize(),i[3].setComponents(l-o,f-u,p-x,C-v).normalize(),n)i[4].setComponents(c,d,m,E).normalize(),i[5].setComponents(l-c,f-d,p-m,C-E).normalize();else if(i[4].setComponents(l-c,f-d,p-m,C-E).normalize(),t===Tn)i[5].setComponents(l+c,f+d,p+m,C+E).normalize();else if(t===Vr)i[5].setComponents(c,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);const t=Ff.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(mr.x=i.normal.x>0?e.max.x:e.min.x,mr.y=i.normal.y>0?e.max.y:e.min.y,mr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qi extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gr=new I,Wr=new I,Tc=new Be,vs=new Ws,gr=new Ln,Ua=new I,Cc=new I;class Xs extends dt{constructor(e=new Ct,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Gr.fromBufferAttribute(t,i-1),Wr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Gr.distanceTo(Wr);e.setAttribute("lineDistance",new Dt(n,1))}else ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(i),gr.radius+=r,e.ray.intersectsSphere(gr)===!1)return;Tc.copy(i).invert(),vs.copy(e.ray).applyMatrix4(Tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){const p=h.getX(x),w=h.getX(x+1),v=xr(this,e,vs,c,p,w,x);v&&t.push(v)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=xr(this,e,vs,c,x,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){const p=xr(this,e,vs,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=xr(this,e,vs,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Gr.fromBufferAttribute(o,i),Wr.fromBufferAttribute(o,r),t.distanceSqToSegment(Gr,Wr,Ua,Cc)>n)return;Ua.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ua);if(!(l<e.near||l>e.far))return{distance:l,point:Cc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Ac=new I,Rc=new I;class Qh extends Xs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ac.fromBufferAttribute(t,i),Rc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ac.distanceTo(Rc);e.setAttribute("lineDistance",new Dt(n,1))}else ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eu extends Xs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class dl extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pc=new Be,zo=new Ws,_r=new Ln,vr=new I;class tu extends dt{constructor(e=new Ct,t=new dl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(i),_r.radius+=r,e.ray.intersectsSphere(_r)===!1)return;Pc.copy(i).invert(),zo.copy(e.ray).applyMatrix4(Pc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,x=f;g<x;g++){const m=l.getX(g);vr.fromBufferAttribute(u,m),Lc(vr,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)vr.fromBufferAttribute(u,g),Lc(vr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lc(s,e,t,n,i,r,a){const o=zo.distanceSqToPoint(s);if(o<t){const c=new I;zo.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Of extends Et{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nu extends Et{constructor(e,t,n=vi,i,r,a,o=Wt,c=Wt,l,h=Ns,u=1){if(h!==Ns&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new al(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class iu extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const br=new I,yr=new I,Na=new I,wr=new an;class Bf extends Ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Wi*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:x,b:m,c:p}=wr;if(x.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),wr.getNormal(Na),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let w=0;w<3;w++){const v=(w+1)%3,E=u[w],C=u[v],M=wr[h[w]],A=wr[h[v]],N=`${E}_${C}`,S=`${C}_${E}`;S in d&&d[S]?(Na.dot(d[S].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(A.x,A.y,A.z)),d[S]=null):N in d||(d[N]={index0:l[w],index1:l[v],normal:Na.clone()})}}for(const g in d)if(d[g]){const{index0:x,index1:m}=d[g];br.fromBufferAttribute(o,x),yr.fromBufferAttribute(o,m),f.push(br.x,br.y,br.z),f.push(yr.x,yr.y,yr.z)}this.setAttribute("position",new Dt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class kf{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new We:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,i=[],r=[],a=[],o=new I,c=new Be;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ge(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ge(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zf extends kf{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new We){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class qs extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const w=p*d-a;for(let v=0;v<l;v++){const E=v*u-r;g.push(E,-w,0),x.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const v=w+l*p,E=w+l*(p+1),C=w+1+l*(p+1),M=w+1+l*p;f.push(v,E,M),f.push(E,C,M)}this.setIndex(f),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}class fl extends Ct{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new I,g=new We;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){const m=x*(n+1);for(let p=0;p<n;p++){const w=p+m,v=w,E=w+n+1,C=w+n+2,M=w+1;o.push(v,E,M),o.push(E,C,M)}}this.setIndex(o),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class es extends Ct{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const w=[],v=p/n;let E=0;p===0&&a===0?E=.5/t:p===n&&c===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const M=C/t;u.x=-e*Math.cos(i+M*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+M*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(M+E,1-v),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){const v=h[p][w+1],E=h[p][w],C=h[p+1][w],M=h[p+1][w+1];(p!==0||a>0)&&f.push(v,E,M),(p!==n-1||c<Math.PI)&&f.push(E,C,M)}this.setIndex(f),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vs extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new St,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends Vs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Vf extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hf extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Sr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Gf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Wf(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ic(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function su(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class js{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Xf extends js{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kl:r=e,o=2*t-n;break;case Jl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Kl:a=e,c=2*n-t;break;case Jl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,w=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,E=f*m-f*x;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+w*a[l+C]+v*a[c+C]+E*a[u+C];return r}}class qf extends js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class jf extends js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class gn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Os:t=this.InterpolantFactoryMethodDiscrete;break;case Bs:t=this.InterpolantFactoryMethodLinear;break;case ca:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Bs;case this.InterpolantFactoryMethodSmooth:return ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Xe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Xe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Gf(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){Xe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ca,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Bs;class os extends gn{constructor(e,t,n){super(e,t,n)}}os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Os;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class ru extends gn{constructor(e,t,n,i){super(e,t,n,i)}}ru.prototype.ValueTypeName="color";class ts extends gn{constructor(e,t,n,i){super(e,t,n,i)}}ts.prototype.ValueTypeName="number";class $f extends js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)ai.slerpFlat(r,0,a,l-o,a,l,c);return r}}class ns extends gn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new $f(this.times,this.values,this.getValueSize(),e)}}ns.prototype.ValueTypeName="quaternion";ns.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends gn{constructor(e,t,n){super(e,t,n)}}ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Os;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class is extends gn{constructor(e,t,n,i){super(e,t,n,i)}}is.prototype.ValueTypeName="vector";class Yf{constructor(e="",t=-1,n=[],i=Td){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Jf(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(gn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Wf(c);c=Ic(c,1,h),l=Ic(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ts(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(ye("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Xe("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,x){if(f.length!==0){const m=[],p=[];su(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let w=0;w!==d[g].morphTargets.length;++w){const v=d[g];m.push(v.time),p.push(v.morphTarget===x?1:0)}i.push(new ts(".morphTargetInfluence["+x+"]",m,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(is,f+".position",d,"pos",i),n(ns,f+".quaternion",d,"rot",i),n(is,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Kf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ts;case"vector":case"vector2":case"vector3":case"vector4":return is;case"color":return ru;case"quaternion":return ns;case"bool":case"boolean":return os;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Jf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Kf(s.type);if(s.times===void 0){const t=[],n=[];su(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Hn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Zf{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Qf=new Zf;class cs{constructor(e){this.manager=e!==void 0?e:Qf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class ep extends Error{constructor(e,t){super(e),this.response=t}}class pl extends cs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Hn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Bn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){w();function w(){u.read().then(({done:v,value:E})=>{if(v)p.close();else{x+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let M=0,A=h.length;M<A;M++){const N=h[M];N.onProgress&&N.onProgress(C)}p.enqueue(E),w()}},v=>{p.error(v)})}}});return new Response(m)}else throw new ep(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Hn.add(`file:${e}`,l);const h=Bn[e];delete Bn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Bn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Bn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Oi=new WeakMap;class tp extends cs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Hn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Oi.get(a);u===void 0&&(u=[],Oi.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=ks("img");function c(){h(),t&&t(this);const u=Oi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Oi.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),Hn.remove(`image:${e}`);const d=Oi.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Oi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Hn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class ml extends cs{constructor(e){super(e)}load(e,t,n,i){const r=new Et,a=new tp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class $r extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Fa=new Be,Dc=new I,Uc=new I;class gl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dc),Uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uc),t.updateMatrixWorld(),Fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class np extends gl{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ji*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ip extends $r{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new np}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nc=new Be,bs=new I,Oa=new I;class sp extends gl{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(bs),Oa.copy(n.position),Oa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oa),n.updateMatrixWorld(),i.makeTranslation(-bs.x,-bs.y,-bs.z),Nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc,n.coordinateSystem,n.reversedDepth)}}class au extends $r{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xl extends Kh{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rp extends gl{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ap extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new rp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class op extends $r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ba=new WeakMap;class lp extends cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Hn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Ba.has(a)===!0)i&&i(Ba.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Hn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ba.set(c,l),Hn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Hn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class cp extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const _l="\\[\\]\\.:\\/",up=new RegExp("["+_l+"]","g"),vl="[^"+_l+"]",dp="[^"+_l.replace("\\.","")+"]",fp=/((?:WC+[\/:])*)/.source.replace("WC",vl),pp=/(WCOD+)?/.source.replace("WCOD",dp),mp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),gp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),xp=new RegExp("^"+fp+pp+mp+gp+"$"),_p=["material","materials","bones","map"];class vp{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(up,"")}static parseTrackName(e){const t=xp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);_p.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=vp;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Fc=new Be;class bp{constructor(e,t,n=0,i=1/0){this.ray=new Ws(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(e,t=!0,n=[]){return Vo(e,this,n,t),n.sort(Oc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Vo(e[i],this,n,t);return n.sort(Oc),n}}function Oc(s,e){return s.distance-e.distance}function Vo(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Vo(r[a],e,t,!0)}}class yp extends yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ye("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Bc(s,e,t,n){const i=wp(n);switch(t){case kh:return s*e;case el:return s*e/i.components*i.byteLength;case tl:return s*e/i.components*i.byteLength;case nl:return s*e*2/i.components*i.byteLength;case il:return s*e*2/i.components*i.byteLength;case zh:return s*e*3/i.components*i.byteLength;case on:return s*e*4/i.components*i.byteLength;case sl:return s*e*4/i.components*i.byteLength;case Lr:case Ir:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Ur:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case co:case uo:return Math.max(s,16)*Math.max(e,8)/4;case lo:case ho:return Math.max(s,8)*Math.max(e,8)/2;case fo:case po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case To:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Co:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Po:case Lo:case Io:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Do:case Uo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case No:case Fo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wp(s){switch(s){case Rn:case Nh:return{byteLength:1,components:1};case Ds:case Fh:case as:return{byteLength:2,components:1};case Zo:case Qo:return{byteLength:2,components:4};case vi:case Jo:case pn:return{byteLength:4,components:1};case Oh:case Bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);function ou(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Sp(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ip=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Op=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,c0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,u0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,L0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,H0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Mp,alphahash_pars_fragment:Ep,alphamap_fragment:Tp,alphamap_pars_fragment:Cp,alphatest_fragment:Ap,alphatest_pars_fragment:Rp,aomap_fragment:Pp,aomap_pars_fragment:Lp,batching_pars_vertex:Ip,batching_vertex:Dp,begin_vertex:Up,beginnormal_vertex:Np,bsdfs:Fp,iridescence_fragment:Op,bumpmap_pars_fragment:Bp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Hp,color_fragment:Gp,color_pars_fragment:Wp,color_pars_vertex:Xp,color_vertex:qp,common:jp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:Yp,displacementmap_pars_vertex:Kp,displacementmap_vertex:Jp,emissivemap_fragment:Zp,emissivemap_pars_fragment:Qp,colorspace_fragment:em,colorspace_pars_fragment:tm,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:sm,envmap_pars_vertex:rm,envmap_physical_pars_fragment:gm,envmap_vertex:am,fog_vertex:om,fog_pars_vertex:lm,fog_fragment:cm,fog_pars_fragment:hm,gradientmap_pars_fragment:um,lightmap_pars_fragment:dm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:xm,lights_toon_pars_fragment:_m,lights_phong_fragment:vm,lights_phong_pars_fragment:bm,lights_physical_fragment:ym,lights_physical_pars_fragment:wm,lights_fragment_begin:Sm,lights_fragment_maps:Mm,lights_fragment_end:Em,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Am,logdepthbuf_vertex:Rm,map_fragment:Pm,map_pars_fragment:Lm,map_particle_fragment:Im,map_particle_pars_fragment:Dm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Nm,morphinstance_vertex:Fm,morphcolor_vertex:Om,morphnormal_vertex:Bm,morphtarget_pars_vertex:km,morphtarget_vertex:zm,normal_fragment_begin:Vm,normal_fragment_maps:Hm,normal_pars_fragment:Gm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:Km,opaque_fragment:Jm,packing:Zm,premultiplied_alpha_fragment:Qm,project_vertex:e0,dithering_fragment:t0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:a0,shadowmap_vertex:o0,shadowmask_pars_fragment:l0,skinbase_vertex:c0,skinning_pars_vertex:h0,skinning_vertex:u0,skinnormal_vertex:d0,specularmap_fragment:f0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:x0,transmission_pars_fragment:_0,uv_pars_fragment:v0,uv_pars_vertex:b0,uv_vertex:y0,worldpos_vertex:w0,background_vert:S0,background_frag:M0,backgroundCube_vert:E0,backgroundCube_frag:T0,cube_vert:C0,cube_frag:A0,depth_vert:R0,depth_frag:P0,distanceRGBA_vert:L0,distanceRGBA_frag:I0,equirect_vert:D0,equirect_frag:U0,linedashed_vert:N0,linedashed_frag:F0,meshbasic_vert:O0,meshbasic_frag:B0,meshlambert_vert:k0,meshlambert_frag:z0,meshmatcap_vert:V0,meshmatcap_frag:H0,meshnormal_vert:G0,meshnormal_frag:W0,meshphong_vert:X0,meshphong_frag:q0,meshphysical_vert:j0,meshphysical_frag:$0,meshtoon_vert:Y0,meshtoon_frag:K0,points_vert:J0,points_frag:Z0,shadow_vert:Q0,shadow_frag:eg,sprite_vert:tg,sprite_frag:ng},oe={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Mn={basic:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ee(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Vt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Vt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ee(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Vt([oe.points,oe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Vt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Vt([oe.common,oe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Vt([oe.sprite,oe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Vt([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Vt([oe.lights,oe.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Mn.physical={uniforms:Vt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Mr={r:0,b:0,g:0},fi=new St,ig=new Be;function sg(s,e,t,n,i,r,a){const o=new Ee(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let E=v.isScene===!0?v.background:null;return E&&E.isTexture&&(E=(v.backgroundBlurriness>0?t:e).get(E)),E}function x(v){let E=!1;const C=g(v);C===null?p(o,c):C&&C.isColor&&(p(C,1),E=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,E){const C=g(E);C&&(C.isCubeTexture||C.mapping===jr)?(h===void 0&&(h=new ct(new Ht(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Zi(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),fi.copy(E.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(fi)),h.material.toneMapped=Ze.getTransfer(C.colorSpace)!==lt,(u!==C||d!==C.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new ct(new qs(2,2),new Pn({name:"BackgroundMaterial",uniforms:Zi(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(C.colorSpace)!==lt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=C,d=C.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB(Mr,Yh(s)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,E,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),c=E,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(o,c)},render:x,addToRenderList:m,dispose:w}}function rg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(b,P,O,V,Y){let W=!1;const q=u(V,O,P);r!==q&&(r=q,l(r.object)),W=f(b,V,O,Y),W&&g(b,V,O,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,E(b,P,O,V),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,P,O){const V=O.wireframe===!0;let Y=n[b.id];Y===void 0&&(Y={},n[b.id]=Y);let W=Y[P.id];W===void 0&&(W={},Y[P.id]=W);let q=W[V];return q===void 0&&(q=d(c()),W[V]=q),q}function d(b){const P=[],O=[],V=[];for(let Y=0;Y<t;Y++)P[Y]=0,O[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:V,object:b,attributes:{},index:null}}function f(b,P,O,V){const Y=r.attributes,W=P.attributes;let q=0;const J=O.getAttributes();for(const H in J)if(J[H].location>=0){const ne=Y[H];let ge=W[H];if(ge===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor)),ne===void 0||ne.attribute!==ge||ge&&ne.data!==ge.data)return!0;q++}return r.attributesNum!==q||r.index!==V}function g(b,P,O,V){const Y={},W=P.attributes;let q=0;const J=O.getAttributes();for(const H in J)if(J[H].location>=0){let ne=W[H];ne===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor));const ge={};ge.attribute=ne,ne&&ne.data&&(ge.data=ne.data),Y[H]=ge,q++}r.attributes=Y,r.attributesNum=q,r.index=V}function x(){const b=r.newAttributes;for(let P=0,O=b.length;P<O;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const O=r.newAttributes,V=r.enabledAttributes,Y=r.attributeDivisors;O[b]=1,V[b]===0&&(s.enableVertexAttribArray(b),V[b]=1),Y[b]!==P&&(s.vertexAttribDivisor(b,P),Y[b]=P)}function w(){const b=r.newAttributes,P=r.enabledAttributes;for(let O=0,V=P.length;O<V;O++)P[O]!==b[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function v(b,P,O,V,Y,W,q){q===!0?s.vertexAttribIPointer(b,P,O,Y,W):s.vertexAttribPointer(b,P,O,V,Y,W)}function E(b,P,O,V){x();const Y=V.attributes,W=O.getAttributes(),q=P.defaultAttributeValues;for(const J in W){const H=W[J];if(H.location>=0){let X=Y[J];if(X===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(X=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(X=b.instanceColor)),X!==void 0){const ne=X.normalized,ge=X.itemSize,ke=e.get(X);if(ke===void 0)continue;const Je=ke.buffer,je=ke.type,$e=ke.bytesPerElement,j=je===s.INT||je===s.UNSIGNED_INT||X.gpuType===Jo;if(X.isInterleavedBufferAttribute){const B=X.data,te=B.stride,Se=X.offset;if(B.isInstancedInterleavedBuffer){for(let he=0;he<H.locationSize;he++)p(H.location+he,B.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let he=0;he<H.locationSize;he++)m(H.location+he);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let he=0;he<H.locationSize;he++)v(H.location+he,ge/H.locationSize,je,ne,te*$e,(Se+ge/H.locationSize*he)*$e,j)}else{if(X.isInstancedBufferAttribute){for(let B=0;B<H.locationSize;B++)p(H.location+B,X.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let B=0;B<H.locationSize;B++)m(H.location+B);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let B=0;B<H.locationSize;B++)v(H.location+B,ge/H.locationSize,je,ne,ge*$e,ge/H.locationSize*B*$e,j)}}else if(q!==void 0){const ne=q[J];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(H.location,ne);break;case 3:s.vertexAttrib3fv(H.location,ne);break;case 4:s.vertexAttrib4fv(H.location,ne);break;default:s.vertexAttrib1fv(H.location,ne)}}}}w()}function C(){N();for(const b in n){const P=n[b];for(const O in P){const V=P[O];for(const Y in V)h(V[Y].object),delete V[Y];delete P[O]}delete n[b]}}function M(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const O in P){const V=P[O];for(const Y in V)h(V[Y].object),delete V[Y];delete P[O]}delete n[b.id]}function A(b){for(const P in n){const O=n[P];if(O[b.id]===void 0)continue;const V=O[b.id];for(const Y in V)h(V[Y].object),delete V[Y];delete O[b.id]}}function N(){S(),a=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function ag(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function og(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==on&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const N=A===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Rn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pn&&!N)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(ye("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,M=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:C,maxSamples:M}}function lg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ti,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const w=r?0:n,v=w*4;let E=p.clippingState||null;c.value=E,E=h(g,d,v,f);for(let C=0;C!==v;++C)E[C]=t[C];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,E=f;v!==x;++v,E+=4)a.copy(u[v]).applyMatrix4(w,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function cg(s){let e=new WeakMap;function t(a,o){return o===ao?a.mapping=$i:o===oo&&(a.mapping=Yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ao||o===oo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Ef(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const si=4,kc=[.125,.215,.35,.446,.526,.582],xi=20,hg=256,ys=new xl,zc=new Ee;let ka=null,za=0,Va=0,Ha=!1;const ug=new I;class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=ug}=r;ka=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,za,Va),this._renderer.xr.enabled=Ha,e.scissorTest=!1,Bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:as,format:on,colorSpace:Xt,depthBuffer:!1},i=Hc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dg(r)),this._blurMaterial=pg(r,e,t),this._ggxMaterial=fg(r,e,t)}return i}_compileMaterial(e){const t=new ct(new Ct,e);this._renderer.compile(t,ys)}_sceneToCubeUV(e,t,n,i,r){const c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(zc),u.toneMapping=ri,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new Ht,new wt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(zc),p=!0);for(let v=0;v<6;v++){const E=v%3;E===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[v],r.y,r.z)):E===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[v]));const C=this._cubeSize;Bi(i,E*C,v>2?C:0,C,C),u.setRenderTarget(i),p&&u.render(x,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$i||e.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Bi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ys)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=.05+l*.95,f=u*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-si?n-g+si:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Bi(r,m,p,3*x,2*x),i.setRenderTarget(r),i.render(o,ys),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Bi(e,m,p,3*x,2*x),i.setRenderTarget(e),i.render(o,ys)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):xi;m>xi&&ye(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const p=[];let w=0;for(let A=0;A<xi;++A){const N=A/x,S=Math.exp(-N*N/2);p.push(S),A===0?w+=S:A<m&&(w+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const E=this._sizeLods[i],C=3*E*(i>v-si?i-v+si:0),M=4*(this._cubeSize-E);Bi(t,C,M,3*E,2*E),c.setRenderTarget(t),c.render(u,ys)}}function dg(s){const e=[],t=[],n=[];let i=s;const r=s-si+1+kc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-si?c=kc[a-s+si-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),v=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let M=0;M<f;M++){const A=M%3*2/3-1,N=M>2?0:-1,S=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];w.set(S,x*g*M),v.set(d,m*g*M);const b=[M,M,M,M,M,M];E.set(b,p*g*M)}const C=new Ct;C.setAttribute("position",new Tt(w,x)),C.setAttribute("uv",new Tt(v,m)),C.setAttribute("faceIndex",new Tt(E,p)),n.push(new ct(C,null)),i>si&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Hc(s,e,t){const n=new bi(s,e,t);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function fg(s,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function pg(s,e,t){const n=new Float32Array(xi),i=new I(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Gc(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Wc(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Yr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ao||c===oo,h=c===$i||c===Yi;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Vc(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Vc(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function gg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&zs("WebGLRenderer: "+n+" extension not supported."),i}}}function xg(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const w=f.array;x=f.version;for(let v=0,E=w.length;v<E;v+=3){const C=w[v+0],M=w[v+1],A=w[v+2];d.push(C,M,M,A,A,C)}}else if(g!==void 0){const w=g.array;x=g.version;for(let v=0,E=w.length/3-1;v<E;v+=3){const C=v+0,M=v+1,A=v+2;d.push(C,M,M,A,A,C)}}else return;const m=new(Wh(d)?$h:jh)(d,1);m.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function _g(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function vg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function bg(s,e,t){const n=new WeakMap,i=new it;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let C=o.attributes.position.count*E,M=1;C>e.maxTextureSize&&(M=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*M*4*u),N=new Xh(A,C,M,u);N.type=pn,N.needsUpdate=!0;const S=E*4;for(let P=0;P<u;P++){const O=p[P],V=w[P],Y=v[P],W=C*M*4*P;for(let q=0;q<O.count;q++){const J=q*S;g===!0&&(i.fromBufferAttribute(O,q),A[W+J+0]=i.x,A[W+J+1]=i.y,A[W+J+2]=i.z,A[W+J+3]=0),x===!0&&(i.fromBufferAttribute(V,q),A[W+J+4]=i.x,A[W+J+5]=i.y,A[W+J+6]=i.z,A[W+J+7]=0),m===!0&&(i.fromBufferAttribute(Y,q),A[W+J+8]=i.x,A[W+J+9]=i.y,A[W+J+10]=i.z,A[W+J+11]=Y.itemSize===4?i.w:1)}}d={count:u,texture:N,size:new We(C,M)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function yg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const lu=new Et,Xc=new nu(1,1),cu=new Xh,hu=new lf,uu=new Jh,qc=[],jc=[],$c=new Float32Array(16),Yc=new Float32Array(9),Kc=new Float32Array(4);function hs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=qc[i];if(r===void 0&&(r=new Float32Array(i),qc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function At(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Kr(s,e){let t=jc[e];t===void 0&&(t=new Int32Array(e),jc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function wg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function Mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function Eg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function Tg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Kc.set(n),s.uniformMatrix2fv(this.addr,!1,Kc),Rt(t,n)}}function Cg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Yc.set(n),s.uniformMatrix3fv(this.addr,!1,Yc),Rt(t,n)}}function Ag(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;$c.set(n),s.uniformMatrix4fv(this.addr,!1,$c),Rt(t,n)}}function Rg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function Lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function Ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function Dg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function Ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function Fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function Og(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Xc.compareFunction=Gh,r=Xc):r=lu,t.setTexture2D(e||r,i)}function Bg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hu,i)}function kg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uu,i)}function zg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cu,i)}function Vg(s){switch(s){case 5126:return wg;case 35664:return Sg;case 35665:return Mg;case 35666:return Eg;case 35674:return Tg;case 35675:return Cg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Pg;case 35668:case 35672:return Lg;case 35669:case 35673:return Ig;case 5125:return Dg;case 36294:return Ug;case 36295:return Ng;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return zg}}function Hg(s,e){s.uniform1fv(this.addr,e)}function Gg(s,e){const t=hs(e,this.size,2);s.uniform2fv(this.addr,t)}function Wg(s,e){const t=hs(e,this.size,3);s.uniform3fv(this.addr,t)}function Xg(s,e){const t=hs(e,this.size,4);s.uniform4fv(this.addr,t)}function qg(s,e){const t=hs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jg(s,e){const t=hs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function $g(s,e){const t=hs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Yg(s,e){s.uniform1iv(this.addr,e)}function Kg(s,e){s.uniform2iv(this.addr,e)}function Jg(s,e){s.uniform3iv(this.addr,e)}function Zg(s,e){s.uniform4iv(this.addr,e)}function Qg(s,e){s.uniform1uiv(this.addr,e)}function ex(s,e){s.uniform2uiv(this.addr,e)}function tx(s,e){s.uniform3uiv(this.addr,e)}function nx(s,e){s.uniform4uiv(this.addr,e)}function ix(s,e,t){const n=this.cache,i=e.length,r=Kr(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||lu,r[a])}function sx(s,e,t){const n=this.cache,i=e.length,r=Kr(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hu,r[a])}function rx(s,e,t){const n=this.cache,i=e.length,r=Kr(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||uu,r[a])}function ax(s,e,t){const n=this.cache,i=e.length,r=Kr(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||cu,r[a])}function ox(s){switch(s){case 5126:return Hg;case 35664:return Gg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return jg;case 35676:return $g;case 5124:case 35670:return Yg;case 35667:case 35671:return Kg;case 35668:case 35672:return Jg;case 35669:case 35673:return Zg;case 5125:return Qg;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ax}}class lx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vg(t.type)}}class cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ox(t.type)}}class hx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Jc(s,e){s.seq.push(e),s.map[e.id]=e}function ux(s,e,t){const n=s.name,i=n.length;for(Ga.lastIndex=0;;){const r=Ga.exec(n),a=Ga.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Jc(t,l===void 0?new lx(o,s,e):new cx(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new hx(o),Jc(t,u)),t=u}}}class Nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);ux(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Zc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const dx=37297;let fx=0;function px(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Qc=new Ve;function mx(s){Ze._getMatrix(Qc,Ze.workingColorSpace,s);const e=`mat3( ${Qc.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case zr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return ye("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function eh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+px(s.getShaderSource(e),o)}else return r}function gx(s,e){const t=mx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xx(s,e){let t;switch(e){case _d:t="Linear";break;case vd:t="Reinhard";break;case bd:t="Cineon";break;case yd:t="ACESFilmic";break;case Sd:t="AgX";break;case Md:t="Neutral";break;case wd:t="Custom";break;default:ye("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Er=new I;function _x(){Ze.getLuminanceCoefficients(Er);const s=Er.x.toFixed(4),e=Er.y.toFixed(4),t=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function bx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Cs(s){return s!==""}function th(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(s){return s.replace(wx,Mx)}const Sx=new Map;function Mx(s,e){let t=He[e];if(t===void 0){const n=Sx.get(e);if(n!==void 0)t=He[n],ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ho(t)}const Ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(s){return s.replace(Ex,Tx)}function Tx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ax(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $i:case Yi:e="ENVMAP_TYPE_CUBE";break;case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Px(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ih:e="ENVMAP_BLENDING_MULTIPLY";break;case gd:e="ENVMAP_BLENDING_MIX";break;case xd:e="ENVMAP_BLENDING_ADD";break}return e}function Lx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ix(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Cx(t),l=Ax(t),h=Rx(t),u=Px(t),d=Lx(t),f=vx(t),g=bx(r),x=i.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(m=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?He.tonemapping_pars_fragment:"",t.toneMapping!==ri?xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,gx("linearToOutputTexel",t.outputColorSpace),_x(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Ho(a),a=th(a,t),a=nh(a,t),o=Ho(o),o=th(o,t),o=nh(o,t),a=ih(a),o=ih(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=w+m+a,E=w+p+o,C=Zc(i,i.VERTEX_SHADER,v),M=Zc(i,i.FRAGMENT_SHADER,E);i.attachShader(x,C),i.attachShader(x,M),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(P){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(x)||"",V=i.getShaderInfoLog(C)||"",Y=i.getShaderInfoLog(M)||"",W=O.trim(),q=V.trim(),J=Y.trim();let H=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,C,M);else{const ne=eh(i,C,"vertex"),ge=eh(i,M,"fragment");Xe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ne+`
`+ge)}else W!==""?ye("WebGLProgram: Program Info Log:",W):(q===""||J==="")&&(X=!1);X&&(P.diagnostics={runnable:H,programLog:W,vertexShader:{log:q,prefix:m},fragmentShader:{log:J,prefix:p}})}i.deleteShader(C),i.deleteShader(M),N=new Nr(i,x),S=yx(i,x)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,dx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=M,this}let Dx=0;class Ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Nx(e),t.set(e,n)),n}}class Nx{constructor(e){this.id=Dx++,this.code=e,this.usedTimes=0}}function Fx(s,e,t,n,i,r,a){const o=new ol,c=new Ux,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,b,P,O,V){const Y=O.fog,W=V.geometry,q=S.isMeshStandardMaterial?O.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),H=J&&J.mapping===jr?J.image.height:null,X=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&ye("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ge=ne!==void 0?ne.length:0;let ke=0;W.morphAttributes.position!==void 0&&(ke=1),W.morphAttributes.normal!==void 0&&(ke=2),W.morphAttributes.color!==void 0&&(ke=3);let Je,je,$e,j;if(X){const at=Mn[X];Je=at.vertexShader,je=at.fragmentShader}else Je=S.vertexShader,je=S.fragmentShader,c.update(S),$e=c.getVertexShaderID(S),j=c.getFragmentShaderID(S);const B=s.getRenderTarget(),te=s.state.buffers.depth.getReversed(),Se=V.isInstancedMesh===!0,he=V.isBatchedMesh===!0,Pe=!!S.map,pt=!!S.matcap,Ue=!!J,et=!!S.aoMap,R=!!S.lightMap,Fe=!!S.bumpMap,ze=!!S.normalMap,tt=!!S.displacementMap,fe=!!S.emissiveMap,nt=!!S.metalnessMap,be=!!S.roughnessMap,Le=S.anisotropy>0,T=S.clearcoat>0,_=S.dispersion>0,F=S.iridescence>0,$=S.sheen>0,Z=S.transmission>0,G=Le&&!!S.anisotropyMap,we=T&&!!S.clearcoatMap,le=T&&!!S.clearcoatNormalMap,Te=T&&!!S.clearcoatRoughnessMap,ve=F&&!!S.iridescenceMap,Q=F&&!!S.iridescenceThicknessMap,se=$&&!!S.sheenColorMap,Ie=$&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,de=!!S.specularColorMap,Ne=!!S.specularIntensityMap,L=Z&&!!S.transmissionMap,ce=Z&&!!S.thicknessMap,re=!!S.gradientMap,ae=!!S.alphaMap,ee=S.alphaTest>0,K=!!S.alphaHash,xe=!!S.extensions;let Oe=ri;S.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const ft={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:Je,fragmentShader:je,defines:S.defines,customVertexShaderID:$e,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:he,batchingColor:he&&V._colorsTexture!==null,instancing:Se,instancingColor:Se&&V.instanceColor!==null,instancingMorph:Se&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:B===null?s.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Xt,alphaToCoverage:!!S.alphaToCoverage,map:Pe,matcap:pt,envMap:Ue,envMapMode:Ue&&J.mapping,envMapCubeUVHeight:H,aoMap:et,lightMap:R,bumpMap:Fe,normalMap:ze,displacementMap:d&&tt,emissiveMap:fe,normalMapObjectSpace:ze&&S.normalMapType===Pd,normalMapTangentSpace:ze&&S.normalMapType===Hh,metalnessMap:nt,roughnessMap:be,anisotropy:Le,anisotropyMap:G,clearcoat:T,clearcoatMap:we,clearcoatNormalMap:le,clearcoatRoughnessMap:Te,dispersion:_,iridescence:F,iridescenceMap:ve,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:se,sheenRoughnessMap:Ie,specularMap:Ae,specularColorMap:de,specularIntensityMap:Ne,transmission:Z,transmissionMap:L,thicknessMap:ce,gradientMap:re,opaque:S.transparent===!1&&S.blending===Gi&&S.alphaToCoverage===!1,alphaMap:ae,alphaTest:ee,alphaHash:K,combine:S.combine,mapUv:Pe&&x(S.map.channel),aoMapUv:et&&x(S.aoMap.channel),lightMapUv:R&&x(S.lightMap.channel),bumpMapUv:Fe&&x(S.bumpMap.channel),normalMapUv:ze&&x(S.normalMap.channel),displacementMapUv:tt&&x(S.displacementMap.channel),emissiveMapUv:fe&&x(S.emissiveMap.channel),metalnessMapUv:nt&&x(S.metalnessMap.channel),roughnessMapUv:be&&x(S.roughnessMap.channel),anisotropyMapUv:G&&x(S.anisotropyMap.channel),clearcoatMapUv:we&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:se&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(S.sheenRoughnessMap.channel),specularMapUv:Ae&&x(S.specularMap.channel),specularColorMapUv:de&&x(S.specularColorMap.channel),specularIntensityMapUv:Ne&&x(S.specularIntensityMap.channel),transmissionMapUv:L&&x(S.transmissionMap.channel),thicknessMapUv:ce&&x(S.thicknessMap.channel),alphaMapUv:ae&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ze||Le),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(Pe||ae),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:te,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Pe&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:fe&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dn,flipSided:S.side===$t,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&S.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(w(b,S),v(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function w(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const b=g[S.type];let P;if(b){const O=Mn[b];P=yf.clone(O.uniforms)}else P=S.uniforms;return P}function C(S,b){let P;for(let O=0,V=h.length;O<V;O++){const Y=h[O];if(Y.cacheKey===b){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new Ix(s,b,S,r),h.push(P)),P}function M(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function A(S){c.remove(S)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:C,releaseProgram:M,releaseShaderCache:A,programs:h,dispose:N}}function Ox(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Bx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ah(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,x,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Bx),n.length>1&&n.sort(d||rh),i.length>1&&i.sort(d||rh)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function kx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new ah,s.set(n,[a])):i>=r.length?(a=new ah,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function zx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ee};break;case"SpotLight":t={position:new I,direction:new I,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function Vx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Hx=0;function Gx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Wx(s){const e=new zx,t=Vx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new Be,a=new Be;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,v=0,E=0,C=0,M=0,A=0;l.sort(Gx);for(let S=0,b=l.length;S<b;S++){const P=l[S],O=P.color,V=P.intensity,Y=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*V,u+=O.g*V,d+=O.b*V;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],V);A++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,H=t.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=P.shadow.matrix,w++}n.directional[f]=q,f++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(O).multiplyScalar(V),q.distance=Y,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[x]=q;const J=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,J.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[x]=J.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=W,E++}x++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(O).multiplyScalar(V),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const J=P.shadow,H=t.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=q,g++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(V),q.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[p]=q,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==w||N.numPointShadows!==v||N.numSpotShadows!==E||N.numSpotMaps!==C||N.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=E+C-M,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=A,N.directionalLength=f,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=w,N.numPointShadows=v,N.numSpotShadows=E,N.numSpotMaps=C,N.numLightProbes=A,n.version=Hx++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const v=l[p];if(v.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),u++}else if(v.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function oh(s){const e=new Wx(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Xx(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new oh(s),e.set(i,[o])):r>=a.length?(o=new oh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $x(s,e,t){let n=new ul;const i=new We,r=new We,a=new it,o=new Vf({depthPacking:Rd}),c=new Hf,l={},h=t.maxTextureSize,u={[Xn]:$t,[$t]:Xn,[dn]:dn},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:qx,fragmentShader:jx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ct;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ph;let p=this.type;this.render=function(M,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const S=s.getRenderTarget(),b=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Gn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=p!==zn&&this.type===zn,Y=p===zn&&this.type!==zn;for(let W=0,q=M.length;W<q;W++){const J=M[W],H=J.shadow;if(H===void 0){ye("WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const X=H.getFrameExtents();if(i.multiply(X),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,H.mapSize.y=r.y)),H.map===null||V===!0||Y===!0){const ge=this.type!==zn?{minFilter:Wt,magFilter:Wt}:{};H.map!==null&&H.map.dispose(),H.map=new bi(i.x,i.y,ge),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ne=H.getViewportCount();for(let ge=0;ge<ne;ge++){const ke=H.getViewport(ge);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),O.viewport(a),H.updateMatrices(J,ge),n=H.getFrustum(),E(A,N,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===zn&&w(H,N),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,b,P)};function w(M,A){const N=e.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new bi(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(A,null,N,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(A,null,N,f,x,null)}function v(M,A,N,S){let b=null;const P=N.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)b=P;else if(b=N.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=b.uuid,V=A.uuid;let Y=l[O];Y===void 0&&(Y={},l[O]=Y);let W=Y[V];W===void 0&&(W=b.clone(),Y[V]=W,A.addEventListener("dispose",C)),b=W}if(b.visible=A.visible,b.wireframe=A.wireframe,S===zn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=s.properties.get(b);O.light=N}return b}function E(M,A,N,S,b){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===zn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld);const V=e.update(M),Y=M.material;if(Array.isArray(Y)){const W=V.groups;for(let q=0,J=W.length;q<J;q++){const H=W[q],X=Y[H.materialIndex];if(X&&X.visible){const ne=v(M,X,S,b);M.onBeforeShadow(s,M,A,N,V,ne,H),s.renderBufferDirect(N,null,V,ne,M,H),M.onAfterShadow(s,M,A,N,V,ne,H)}}}else if(Y.visible){const W=v(M,Y,S,b);M.onBeforeShadow(s,M,A,N,V,W,null),s.renderBufferDirect(N,null,V,W,M,null),M.onAfterShadow(s,M,A,N,V,W,null)}}const O=M.children;for(let V=0,Y=O.length;V<Y;V++)E(O[V],A,N,S,b)}function C(M){M.target.removeEventListener("dispose",C);for(const N in l){const S=l[N],b=M.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const Yx={[Qa]:eo,[to]:so,[no]:ro,[ji]:io,[eo]:Qa,[so]:to,[ro]:no,[io]:ji};function Kx(s,e){function t(){let L=!1;const ce=new it;let re=null;const ae=new it(0,0,0,0);return{setMask:function(ee){re!==ee&&!L&&(s.colorMask(ee,ee,ee,ee),re=ee)},setLocked:function(ee){L=ee},setClear:function(ee,K,xe,Oe,ft){ft===!0&&(ee*=Oe,K*=Oe,xe*=Oe),ce.set(ee,K,xe,Oe),ae.equals(ce)===!1&&(s.clearColor(ee,K,xe,Oe),ae.copy(ce))},reset:function(){L=!1,re=null,ae.set(-1,0,0,0)}}}function n(){let L=!1,ce=!1,re=null,ae=null,ee=null;return{setReversed:function(K){if(ce!==K){const xe=e.get("EXT_clip_control");K?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ce=K;const Oe=ee;ee=null,this.setClear(Oe)}},getReversed:function(){return ce},setTest:function(K){K?B(s.DEPTH_TEST):te(s.DEPTH_TEST)},setMask:function(K){re!==K&&!L&&(s.depthMask(K),re=K)},setFunc:function(K){if(ce&&(K=Yx[K]),ae!==K){switch(K){case Qa:s.depthFunc(s.NEVER);break;case eo:s.depthFunc(s.ALWAYS);break;case to:s.depthFunc(s.LESS);break;case ji:s.depthFunc(s.LEQUAL);break;case no:s.depthFunc(s.EQUAL);break;case io:s.depthFunc(s.GEQUAL);break;case so:s.depthFunc(s.GREATER);break;case ro:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ae=K}},setLocked:function(K){L=K},setClear:function(K){ee!==K&&(ce&&(K=1-K),s.clearDepth(K),ee=K)},reset:function(){L=!1,re=null,ae=null,ee=null,ce=!1}}}function i(){let L=!1,ce=null,re=null,ae=null,ee=null,K=null,xe=null,Oe=null,ft=null;return{setTest:function(at){L||(at?B(s.STENCIL_TEST):te(s.STENCIL_TEST))},setMask:function(at){ce!==at&&!L&&(s.stencilMask(at),ce=at)},setFunc:function(at,xn,ln){(re!==at||ae!==xn||ee!==ln)&&(s.stencilFunc(at,xn,ln),re=at,ae=xn,ee=ln)},setOp:function(at,xn,ln){(K!==at||xe!==xn||Oe!==ln)&&(s.stencilOp(at,xn,ln),K=at,xe=xn,Oe=ln)},setLocked:function(at){L=at},setClear:function(at){ft!==at&&(s.clearStencil(at),ft=at)},reset:function(){L=!1,ce=null,re=null,ae=null,ee=null,K=null,xe=null,Oe=null,ft=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,v=null,E=null,C=null,M=null,A=new Ee(0,0,0),N=0,S=!1,b=null,P=null,O=null,V=null,Y=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=J>=2);let X=null,ne={};const ge=s.getParameter(s.SCISSOR_BOX),ke=s.getParameter(s.VIEWPORT),Je=new it().fromArray(ge),je=new it().fromArray(ke);function $e(L,ce,re,ae){const ee=new Uint8Array(4),K=s.createTexture();s.bindTexture(L,K),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<re;xe++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,ae,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(ce+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return K}const j={};j[s.TEXTURE_2D]=$e(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=$e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=$e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=$e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),B(s.DEPTH_TEST),a.setFunc(ji),Fe(!1),ze(Wl),B(s.CULL_FACE),et(Gn);function B(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function te(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Se(L,ce){return u[L]!==ce?(s.bindFramebuffer(L,ce),u[L]=ce,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ce),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function he(L,ce){let re=f,ae=!1;if(L){re=d.get(ce),re===void 0&&(re=[],d.set(ce,re));const ee=L.textures;if(re.length!==ee.length||re[0]!==s.COLOR_ATTACHMENT0){for(let K=0,xe=ee.length;K<xe;K++)re[K]=s.COLOR_ATTACHMENT0+K;re.length=ee.length,ae=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,ae=!0);ae&&s.drawBuffers(re)}function Pe(L){return g!==L?(s.useProgram(L),g=L,!0):!1}const pt={[gi]:s.FUNC_ADD,[Qu]:s.FUNC_SUBTRACT,[ed]:s.FUNC_REVERSE_SUBTRACT};pt[td]=s.MIN,pt[nd]=s.MAX;const Ue={[id]:s.ZERO,[sd]:s.ONE,[rd]:s.SRC_COLOR,[Ja]:s.SRC_ALPHA,[ud]:s.SRC_ALPHA_SATURATE,[cd]:s.DST_COLOR,[od]:s.DST_ALPHA,[ad]:s.ONE_MINUS_SRC_COLOR,[Za]:s.ONE_MINUS_SRC_ALPHA,[hd]:s.ONE_MINUS_DST_COLOR,[ld]:s.ONE_MINUS_DST_ALPHA,[dd]:s.CONSTANT_COLOR,[fd]:s.ONE_MINUS_CONSTANT_COLOR,[pd]:s.CONSTANT_ALPHA,[md]:s.ONE_MINUS_CONSTANT_ALPHA};function et(L,ce,re,ae,ee,K,xe,Oe,ft,at){if(L===Gn){x===!0&&(te(s.BLEND),x=!1);return}if(x===!1&&(B(s.BLEND),x=!0),L!==Zu){if(L!==m||at!==S){if((p!==gi||E!==gi)&&(s.blendEquation(s.FUNC_ADD),p=gi,E=gi),at)switch(L){case Gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xl:s.blendFunc(s.ONE,s.ONE);break;case ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xe("WebGLState: Invalid blending: ",L);break}else switch(L){case Gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ql:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",L);break}w=null,v=null,C=null,M=null,A.set(0,0,0),N=0,m=L,S=at}return}ee=ee||ce,K=K||re,xe=xe||ae,(ce!==p||ee!==E)&&(s.blendEquationSeparate(pt[ce],pt[ee]),p=ce,E=ee),(re!==w||ae!==v||K!==C||xe!==M)&&(s.blendFuncSeparate(Ue[re],Ue[ae],Ue[K],Ue[xe]),w=re,v=ae,C=K,M=xe),(Oe.equals(A)===!1||ft!==N)&&(s.blendColor(Oe.r,Oe.g,Oe.b,ft),A.copy(Oe),N=ft),m=L,S=!1}function R(L,ce){L.side===dn?te(s.CULL_FACE):B(s.CULL_FACE);let re=L.side===$t;ce&&(re=!re),Fe(re),L.blending===Gi&&L.transparent===!1?et(Gn):et(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ae=L.stencilWrite;o.setTest(ae),ae&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),fe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?B(s.SAMPLE_ALPHA_TO_COVERAGE):te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){b!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),b=L)}function ze(L){L!==Ku?(B(s.CULL_FACE),L!==P&&(L===Wl?s.cullFace(s.BACK):L===Ju?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):te(s.CULL_FACE),P=L}function tt(L){L!==O&&(q&&s.lineWidth(L),O=L)}function fe(L,ce,re){L?(B(s.POLYGON_OFFSET_FILL),(V!==ce||Y!==re)&&(s.polygonOffset(ce,re),V=ce,Y=re)):te(s.POLYGON_OFFSET_FILL)}function nt(L){L?B(s.SCISSOR_TEST):te(s.SCISSOR_TEST)}function be(L){L===void 0&&(L=s.TEXTURE0+W-1),X!==L&&(s.activeTexture(L),X=L)}function Le(L,ce,re){re===void 0&&(X===null?re=s.TEXTURE0+W-1:re=X);let ae=ne[re];ae===void 0&&(ae={type:void 0,texture:void 0},ne[re]=ae),(ae.type!==L||ae.texture!==ce)&&(X!==re&&(s.activeTexture(re),X=re),s.bindTexture(L,ce||j[L]),ae.type=L,ae.texture=ce)}function T(){const L=ne[X];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function $(){try{s.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Z(){try{s.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function we(){try{s.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function le(){try{s.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Te(){try{s.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ve(){try{s.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Q(){try{s.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function se(L){Je.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Je.copy(L))}function Ie(L){je.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),je.copy(L))}function Ae(L,ce){let re=l.get(ce);re===void 0&&(re=new WeakMap,l.set(ce,re));let ae=re.get(L);ae===void 0&&(ae=s.getUniformBlockIndex(ce,L.name),re.set(L,ae))}function de(L,ce){const ae=l.get(ce).get(L);c.get(ce)!==ae&&(s.uniformBlockBinding(ce,ae,L.__bindingPointIndex),c.set(ce,ae))}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},X=null,ne={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,v=null,E=null,C=null,M=null,A=new Ee(0,0,0),N=0,S=!1,b=null,P=null,O=null,V=null,Y=null,Je.set(0,0,s.canvas.width,s.canvas.height),je.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:B,disable:te,bindFramebuffer:Se,drawBuffers:he,useProgram:Pe,setBlending:et,setMaterial:R,setFlipSided:Fe,setCullFace:ze,setLineWidth:tt,setPolygonOffset:fe,setScissorTest:nt,activeTexture:be,bindTexture:Le,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:ve,texImage3D:Q,updateUBOMapping:Ae,uniformBlockBinding:de,texStorage2D:le,texStorage3D:Te,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:G,compressedTexSubImage3D:we,scissor:se,viewport:Ie,reset:Ne}}function Jx(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):ks("canvas")}function x(T,_,F){let $=1;const Z=Le(T);if((Z.width>F||Z.height>F)&&($=F/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const G=Math.floor($*Z.width),we=Math.floor($*Z.height);u===void 0&&(u=g(G,we));const le=_?g(G,we):u;return le.width=G,le.height=we,le.getContext("2d").drawImage(T,0,0,G,we),ye("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+we+")."),le}else return"data"in T&&ye("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(T,_,F,$,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let G=_;if(_===s.RED&&(F===s.FLOAT&&(G=s.R32F),F===s.HALF_FLOAT&&(G=s.R16F),F===s.UNSIGNED_BYTE&&(G=s.R8)),_===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(G=s.R8UI),F===s.UNSIGNED_SHORT&&(G=s.R16UI),F===s.UNSIGNED_INT&&(G=s.R32UI),F===s.BYTE&&(G=s.R8I),F===s.SHORT&&(G=s.R16I),F===s.INT&&(G=s.R32I)),_===s.RG&&(F===s.FLOAT&&(G=s.RG32F),F===s.HALF_FLOAT&&(G=s.RG16F),F===s.UNSIGNED_BYTE&&(G=s.RG8)),_===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(G=s.RG8UI),F===s.UNSIGNED_SHORT&&(G=s.RG16UI),F===s.UNSIGNED_INT&&(G=s.RG32UI),F===s.BYTE&&(G=s.RG8I),F===s.SHORT&&(G=s.RG16I),F===s.INT&&(G=s.RG32I)),_===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(G=s.RGB8UI),F===s.UNSIGNED_SHORT&&(G=s.RGB16UI),F===s.UNSIGNED_INT&&(G=s.RGB32UI),F===s.BYTE&&(G=s.RGB8I),F===s.SHORT&&(G=s.RGB16I),F===s.INT&&(G=s.RGB32I)),_===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),F===s.UNSIGNED_INT&&(G=s.RGBA32UI),F===s.BYTE&&(G=s.RGBA8I),F===s.SHORT&&(G=s.RGBA16I),F===s.INT&&(G=s.RGBA32I)),_===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(G=s.R11F_G11F_B10F)),_===s.RGBA){const we=Z?zr:Ze.getTransfer($);F===s.FLOAT&&(G=s.RGBA32F),F===s.HALF_FLOAT&&(G=s.RGBA16F),F===s.UNSIGNED_BYTE&&(G=we===lt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function E(T,_){let F;return T?_===null||_===vi||_===Us?F=s.DEPTH24_STENCIL8:_===pn?F=s.DEPTH32F_STENCIL8:_===Ds&&(F=s.DEPTH24_STENCIL8,ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===vi||_===Us?F=s.DEPTH_COMPONENT24:_===pn?F=s.DEPTH_COMPONENT32F:_===Ds&&(F=s.DEPTH_COMPONENT16),F}function C(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Wt&&T.minFilter!==Bt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function M(T){const _=T.target;_.removeEventListener("dispose",M),N(_),_.isVideoTexture&&h.delete(_)}function A(T){const _=T.target;_.removeEventListener("dispose",A),b(_)}function N(T){const _=n.get(T);if(_.__webglInit===void 0)return;const F=T.source,$=d.get(F);if($){const Z=$[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(T),Object.keys($).length===0&&d.delete(F)}n.remove(T)}function S(T){const _=n.get(T);s.deleteTexture(_.__webglTexture);const F=T.source,$=d.get(F);delete $[_.__cacheKey],a.memory.textures--}function b(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Z=0;Z<_.__webglFramebuffer[$].length;Z++)s.deleteFramebuffer(_.__webglFramebuffer[$][Z]);else s.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)s.deleteFramebuffer(_.__webglFramebuffer[$]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=T.textures;for(let $=0,Z=F.length;$<Z;$++){const G=n.get(F[$]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(F[$])}n.remove(T)}let P=0;function O(){P=0}function V(){const T=P;return T>=i.maxTextures&&ye("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function Y(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function W(T,_){const F=n.get(T);if(T.isVideoTexture&&nt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const $=T.image;if($===null)ye("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ye("WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,T,_);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+_)}function q(T,_){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){j(F,T,_);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+_)}function J(T,_){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){j(F,T,_);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+_)}function H(T,_){const F=n.get(T);if(T.version>0&&F.__version!==T.version){B(F,T,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+_)}const X={[Ki]:s.REPEAT,[En]:s.CLAMP_TO_EDGE,[kr]:s.MIRRORED_REPEAT},ne={[Wt]:s.NEAREST,[Uh]:s.NEAREST_MIPMAP_NEAREST,[Ts]:s.NEAREST_MIPMAP_LINEAR,[Bt]:s.LINEAR,[Pr]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},ge={[Ld]:s.NEVER,[Od]:s.ALWAYS,[Id]:s.LESS,[Gh]:s.LEQUAL,[Dd]:s.EQUAL,[Fd]:s.GEQUAL,[Ud]:s.GREATER,[Nd]:s.NOTEQUAL};function ke(T,_){if(_.type===pn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Bt||_.magFilter===Pr||_.magFilter===Ts||_.magFilter===Vn||_.minFilter===Bt||_.minFilter===Pr||_.minFilter===Ts||_.minFilter===Vn)&&ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,X[_.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,X[_.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,X[_.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ne[_.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ne[_.minFilter]),_.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Wt||_.minFilter!==Ts&&_.minFilter!==Vn||_.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Je(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",M));const $=_.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const G=Y(_);if(G!==T.__cacheKey){Z[G]===void 0&&(Z[G]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[G].usedTimes++;const we=Z[T.__cacheKey];we!==void 0&&(Z[T.__cacheKey].usedTimes--,we.usedTimes===0&&S(_)),T.__cacheKey=G,T.__webglTexture=Z[G].texture}return F}function je(T,_,F){return Math.floor(Math.floor(T/F)/_)}function $e(T,_,F,$){const G=T.updateRanges;if(G.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,F,$,_.data);else{G.sort((Q,se)=>Q.start-se.start);let we=0;for(let Q=1;Q<G.length;Q++){const se=G[we],Ie=G[Q],Ae=se.start+se.count,de=je(Ie.start,_.width,4),Ne=je(se.start,_.width,4);Ie.start<=Ae+1&&de===Ne&&je(Ie.start+Ie.count-1,_.width,4)===de?se.count=Math.max(se.count,Ie.start+Ie.count-se.start):(++we,G[we]=Ie)}G.length=we+1;const le=s.getParameter(s.UNPACK_ROW_LENGTH),Te=s.getParameter(s.UNPACK_SKIP_PIXELS),ve=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Q=0,se=G.length;Q<se;Q++){const Ie=G[Q],Ae=Math.floor(Ie.start/4),de=Math.ceil(Ie.count/4),Ne=Ae%_.width,L=Math.floor(Ae/_.width),ce=de,re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Ne,L,ce,re,F,$,_.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Te),s.pixelStorei(s.UNPACK_SKIP_ROWS,ve)}}function j(T,_,F){let $=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=s.TEXTURE_3D);const Z=Je(T,_),G=_.source;t.bindTexture($,T.__webglTexture,s.TEXTURE0+F);const we=n.get(G);if(G.version!==we.__version||Z===!0){t.activeTexture(s.TEXTURE0+F);const le=Ze.getPrimaries(Ze.workingColorSpace),Te=_.colorSpace===ni?null:Ze.getPrimaries(_.colorSpace),ve=_.colorSpace===ni||le===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Q=x(_.image,!1,i.maxTextureSize);Q=be(_,Q);const se=r.convert(_.format,_.colorSpace),Ie=r.convert(_.type);let Ae=v(_.internalFormat,se,Ie,_.colorSpace,_.isVideoTexture);ke($,_);let de;const Ne=_.mipmaps,L=_.isVideoTexture!==!0,ce=we.__version===void 0||Z===!0,re=G.dataReady,ae=C(_,Q);if(_.isDepthTexture)Ae=E(_.format===Fs,_.type),ce&&(L?t.texStorage2D(s.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,Ae,Q.width,Q.height,0,se,Ie,null));else if(_.isDataTexture)if(Ne.length>0){L&&ce&&t.texStorage2D(s.TEXTURE_2D,ae,Ae,Ne[0].width,Ne[0].height);for(let ee=0,K=Ne.length;ee<K;ee++)de=Ne[ee],L?re&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,de.width,de.height,se,Ie,de.data):t.texImage2D(s.TEXTURE_2D,ee,Ae,de.width,de.height,0,se,Ie,de.data);_.generateMipmaps=!1}else L?(ce&&t.texStorage2D(s.TEXTURE_2D,ae,Ae,Q.width,Q.height),re&&$e(_,Q,se,Ie)):t.texImage2D(s.TEXTURE_2D,0,Ae,Q.width,Q.height,0,se,Ie,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Ae,Ne[0].width,Ne[0].height,Q.depth);for(let ee=0,K=Ne.length;ee<K;ee++)if(de=Ne[ee],_.format!==on)if(se!==null)if(L){if(re)if(_.layerUpdates.size>0){const xe=Bc(de.width,de.height,_.format,_.type);for(const Oe of _.layerUpdates){const ft=de.data.subarray(Oe*xe/de.data.BYTES_PER_ELEMENT,(Oe+1)*xe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Oe,de.width,de.height,1,se,ft)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,Q.depth,se,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Ae,de.width,de.height,Q.depth,0,de.data,0,0);else ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,Q.depth,se,Ie,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Ae,de.width,de.height,Q.depth,0,se,Ie,de.data)}else{L&&ce&&t.texStorage2D(s.TEXTURE_2D,ae,Ae,Ne[0].width,Ne[0].height);for(let ee=0,K=Ne.length;ee<K;ee++)de=Ne[ee],_.format!==on?se!==null?L?re&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,de.width,de.height,se,de.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Ae,de.width,de.height,0,de.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?re&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,de.width,de.height,se,Ie,de.data):t.texImage2D(s.TEXTURE_2D,ee,Ae,de.width,de.height,0,se,Ie,de.data)}else if(_.isDataArrayTexture)if(L){if(ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Ae,Q.width,Q.height,Q.depth),re)if(_.layerUpdates.size>0){const ee=Bc(Q.width,Q.height,_.format,_.type);for(const K of _.layerUpdates){const xe=Q.data.subarray(K*ee/Q.data.BYTES_PER_ELEMENT,(K+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,se,Ie,xe)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,se,Ie,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,se,Ie,Q.data);else if(_.isData3DTexture)L?(ce&&t.texStorage3D(s.TEXTURE_3D,ae,Ae,Q.width,Q.height,Q.depth),re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,se,Ie,Q.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,se,Ie,Q.data);else if(_.isFramebufferTexture){if(ce)if(L)t.texStorage2D(s.TEXTURE_2D,ae,Ae,Q.width,Q.height);else{let ee=Q.width,K=Q.height;for(let xe=0;xe<ae;xe++)t.texImage2D(s.TEXTURE_2D,xe,Ae,ee,K,0,se,Ie,null),ee>>=1,K>>=1}}else if(Ne.length>0){if(L&&ce){const ee=Le(Ne[0]);t.texStorage2D(s.TEXTURE_2D,ae,Ae,ee.width,ee.height)}for(let ee=0,K=Ne.length;ee<K;ee++)de=Ne[ee],L?re&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,se,Ie,de):t.texImage2D(s.TEXTURE_2D,ee,Ae,se,Ie,de);_.generateMipmaps=!1}else if(L){if(ce){const ee=Le(Q);t.texStorage2D(s.TEXTURE_2D,ae,Ae,ee.width,ee.height)}re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se,Ie,Q)}else t.texImage2D(s.TEXTURE_2D,0,Ae,se,Ie,Q);m(_)&&p($),we.__version=G.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function B(T,_,F){if(_.image.length!==6)return;const $=Je(T,_),Z=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+F);const G=n.get(Z);if(Z.version!==G.__version||$===!0){t.activeTexture(s.TEXTURE0+F);const we=Ze.getPrimaries(Ze.workingColorSpace),le=_.colorSpace===ni?null:Ze.getPrimaries(_.colorSpace),Te=_.colorSpace===ni||we===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ve=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,se=[];for(let K=0;K<6;K++)!ve&&!Q?se[K]=x(_.image[K],!0,i.maxCubemapSize):se[K]=Q?_.image[K].image:_.image[K],se[K]=be(_,se[K]);const Ie=se[0],Ae=r.convert(_.format,_.colorSpace),de=r.convert(_.type),Ne=v(_.internalFormat,Ae,de,_.colorSpace),L=_.isVideoTexture!==!0,ce=G.__version===void 0||$===!0,re=Z.dataReady;let ae=C(_,Ie);ke(s.TEXTURE_CUBE_MAP,_);let ee;if(ve){L&&ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,Ne,Ie.width,Ie.height);for(let K=0;K<6;K++){ee=se[K].mipmaps;for(let xe=0;xe<ee.length;xe++){const Oe=ee[xe];_.format!==on?Ae!==null?L?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,0,0,Oe.width,Oe.height,Ae,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,Ne,Oe.width,Oe.height,0,Oe.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,0,0,Oe.width,Oe.height,Ae,de,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,Ne,Oe.width,Oe.height,0,Ae,de,Oe.data)}}}else{if(ee=_.mipmaps,L&&ce){ee.length>0&&ae++;const K=Le(se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,Ne,K.width,K.height)}for(let K=0;K<6;K++)if(Q){L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,se[K].width,se[K].height,Ae,de,se[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,se[K].width,se[K].height,0,Ae,de,se[K].data);for(let xe=0;xe<ee.length;xe++){const ft=ee[xe].image[K].image;L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,0,0,ft.width,ft.height,Ae,de,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,Ne,ft.width,ft.height,0,Ae,de,ft.data)}}else{L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ae,de,se[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,Ae,de,se[K]);for(let xe=0;xe<ee.length;xe++){const Oe=ee[xe];L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,0,0,Ae,de,Oe.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,Ne,Ae,de,Oe.image[K])}}}m(_)&&p(s.TEXTURE_CUBE_MAP),G.__version=Z.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function te(T,_,F,$,Z,G){const we=r.convert(F.format,F.colorSpace),le=r.convert(F.type),Te=v(F.internalFormat,we,le,F.colorSpace),ve=n.get(_),Q=n.get(F);if(Q.__renderTarget=_,!ve.__hasExternalTextures){const se=Math.max(1,_.width>>G),Ie=Math.max(1,_.height>>G);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,G,Te,se,Ie,_.depth,0,we,le,null):t.texImage2D(Z,G,Te,se,Ie,0,we,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),fe(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,Q.__webglTexture,0,tt(_)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,Q.__webglTexture,G),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(T,_,F){if(s.bindRenderbuffer(s.RENDERBUFFER,T),_.depthBuffer){const $=_.depthTexture,Z=$&&$.isDepthTexture?$.type:null,G=E(_.stencilBuffer,Z),we=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=tt(_);fe(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,G,_.width,_.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,G,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,G,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,T)}else{const $=_.textures;for(let Z=0;Z<$.length;Z++){const G=$[Z],we=r.convert(G.format,G.colorSpace),le=r.convert(G.type),Te=v(G.internalFormat,we,le,G.colorSpace),ve=tt(_);F&&fe(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,Te,_.width,_.height):fe(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,Te,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Te,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const Z=$.__webglTexture,G=tt(_);if(_.depthTexture.format===Ns)fe(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Fs)fe(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Pe(T){const _=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=$}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const $=T.texture.mipmaps;$&&$.length>0?he(_.__webglFramebuffer[0],T):he(_.__webglFramebuffer,T)}else if(F){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=s.createRenderbuffer(),Se(_.__webglDepthbuffer[$],T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,G)}}else{const $=T.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Se(_.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,G)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(T,_,F){const $=n.get(T);_!==void 0&&te($.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Pe(T)}function Ue(T){const _=T.texture,F=n.get(T),$=n.get(_);T.addEventListener("dispose",A);const Z=T.textures,G=T.isWebGLCubeRenderTarget===!0,we=Z.length>1;if(we||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=_.version,a.memory.textures++),G){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let Te=0;Te<_.mipmaps.length;Te++)F.__webglFramebuffer[le][Te]=s.createFramebuffer()}else F.__webglFramebuffer[le]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)F.__webglFramebuffer[le]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(we)for(let le=0,Te=Z.length;le<Te;le++){const ve=n.get(Z[le]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&fe(T)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const Te=Z[le];F.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const ve=r.convert(Te.format,Te.colorSpace),Q=r.convert(Te.type),se=v(Te.internalFormat,ve,Q,Te.colorSpace,T.isXRRenderTarget===!0),Ie=tt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,se,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,F.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Se(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),ke(s.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)te(F.__webglFramebuffer[le][Te],T,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te);else te(F.__webglFramebuffer[le],T,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(_)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let le=0,Te=Z.length;le<Te;le++){const ve=Z[le],Q=n.get(ve);let se=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,Q.__webglTexture),ke(se,ve),te(F.__webglFramebuffer,T,ve,s.COLOR_ATTACHMENT0+le,se,0),m(ve)&&p(se)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),ke(le,_),_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)te(F.__webglFramebuffer[Te],T,_,s.COLOR_ATTACHMENT0,le,Te);else te(F.__webglFramebuffer,T,_,s.COLOR_ATTACHMENT0,le,0);m(_)&&p(le),t.unbindTexture()}T.depthBuffer&&Pe(T)}function et(T){const _=T.textures;for(let F=0,$=_.length;F<$;F++){const Z=_[F];if(m(Z)){const G=w(T),we=n.get(Z).__webglTexture;t.bindTexture(G,we),p(G),t.unbindTexture()}}}const R=[],Fe=[];function ze(T){if(T.samples>0){if(fe(T)===!1){const _=T.textures,F=T.width,$=T.height;let Z=s.COLOR_BUFFER_BIT;const G=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(T),le=_.length>1;if(le)for(let ve=0;ve<_.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Te=T.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ve=0;ve<_.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const Q=n.get(_[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,F,$,0,0,F,$,Z,s.NEAREST),c===!0&&(R.length=0,Fe.length=0,R.push(s.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.resolveDepthBuffer===!1&&(R.push(G),Fe.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Fe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let ve=0;ve<_.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const Q=n.get(_[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,Q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const _=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function tt(T){return Math.min(i.maxSamples,T.samples)}function fe(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function nt(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function be(T,_){const F=T.colorSpace,$=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Xt&&F!==ni&&(Ze.getTransfer(F)===lt?($!==on||Z!==Rn)&&ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",F)),_}function Le(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=pt,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=fe}function Zx(s,e){function t(n,i=ni){let r;const a=Ze.getTransfer(i);if(n===Rn)return s.UNSIGNED_BYTE;if(n===Zo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Bh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nh)return s.BYTE;if(n===Fh)return s.SHORT;if(n===Ds)return s.UNSIGNED_SHORT;if(n===Jo)return s.INT;if(n===vi)return s.UNSIGNED_INT;if(n===pn)return s.FLOAT;if(n===as)return s.HALF_FLOAT;if(n===kh)return s.ALPHA;if(n===zh)return s.RGB;if(n===on)return s.RGBA;if(n===Ns)return s.DEPTH_COMPONENT;if(n===Fs)return s.DEPTH_STENCIL;if(n===el)return s.RED;if(n===tl)return s.RED_INTEGER;if(n===nl)return s.RG;if(n===il)return s.RG_INTEGER;if(n===sl)return s.RGBA_INTEGER;if(n===Lr||n===Ir||n===Dr||n===Ur)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lo||n===co||n===ho||n===uo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fo||n===po||n===mo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fo||n===po)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===go||n===xo||n===_o||n===vo||n===bo||n===yo||n===wo||n===So||n===Mo||n===Eo||n===To||n===Co||n===Ao||n===Ro)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===go)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===To)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===Lo||n===Io)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Uo||n===No||n===Fo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class t_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new iu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:Qx,fragmentShader:e_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n_ extends yi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new t_,p={},w=t.getContextAttributes();let v=null,E=null;const C=[],M=[],A=new We;let N=null;const S=new Gt;S.viewport=new it;const b=new Gt;b.viewport=new it;const P=[S,b],O=new cp;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let B=C[j];return B===void 0&&(B=new Pa,C[j]=B),B.getTargetRaySpace()},this.getControllerGrip=function(j){let B=C[j];return B===void 0&&(B=new Pa,C[j]=B),B.getGripSpace()},this.getHand=function(j){let B=C[j];return B===void 0&&(B=new Pa,C[j]=B),B.getHandSpace()};function W(j){const B=M.indexOf(j.inputSource);if(B===-1)return;const te=C[B];te!==void 0&&(te.update(j.inputSource,j.frame,l||a),te.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",J);for(let j=0;j<C.length;j++){const B=M[j];B!==null&&(M[j]=null,C[j].disconnect(B))}V=null,Y=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(v),f=null,d=null,u=null,i=null,E=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",q),i.addEventListener("inputsourceschange",J),w.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Se=null,he=null;w.depth&&(he=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=w.stencil?Fs:Ns,Se=w.stencil?Us:vi);const Pe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new bi(d.textureWidth,d.textureHeight,{format:on,type:Rn,depthTexture:new nu(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new bi(f.framebufferWidth,f.framebufferHeight,{format:on,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(j){for(let B=0;B<j.removed.length;B++){const te=j.removed[B],Se=M.indexOf(te);Se>=0&&(M[Se]=null,C[Se].disconnect(te))}for(let B=0;B<j.added.length;B++){const te=j.added[B];let Se=M.indexOf(te);if(Se===-1){for(let Pe=0;Pe<C.length;Pe++)if(Pe>=M.length){M.push(te),Se=Pe;break}else if(M[Pe]===null){M[Pe]=te,Se=Pe;break}if(Se===-1)break}const he=C[Se];he&&he.connect(te)}}const H=new I,X=new I;function ne(j,B,te){H.setFromMatrixPosition(B.matrixWorld),X.setFromMatrixPosition(te.matrixWorld);const Se=H.distanceTo(X),he=B.projectionMatrix.elements,Pe=te.projectionMatrix.elements,pt=he[14]/(he[10]-1),Ue=he[14]/(he[10]+1),et=(he[9]+1)/he[5],R=(he[9]-1)/he[5],Fe=(he[8]-1)/he[0],ze=(Pe[8]+1)/Pe[0],tt=pt*Fe,fe=pt*ze,nt=Se/(-Fe+ze),be=nt*-Fe;if(B.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(be),j.translateZ(nt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),he[10]===-1)j.projectionMatrix.copy(B.projectionMatrix),j.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const Le=pt+nt,T=Ue+nt,_=tt-be,F=fe+(Se-be),$=et*Ue/T*Le,Z=R*Ue/T*Le;j.projectionMatrix.makePerspective(_,F,$,Z,Le,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ge(j,B){B===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(B.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let B=j.near,te=j.far;m.texture!==null&&(m.depthNear>0&&(B=m.depthNear),m.depthFar>0&&(te=m.depthFar)),O.near=b.near=S.near=B,O.far=b.far=S.far=te,(V!==O.near||Y!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),V=O.near,Y=O.far),O.layers.mask=j.layers.mask|6,S.layers.mask=O.layers.mask&3,b.layers.mask=O.layers.mask&5;const Se=j.parent,he=O.cameras;ge(O,Se);for(let Pe=0;Pe<he.length;Pe++)ge(he[Pe],Se);he.length===2?ne(O,S,b):O.projectionMatrix.copy(S.projectionMatrix),ke(j,O,Se)};function ke(j,B,te){te===null?j.matrix.copy(B.matrixWorld):(j.matrix.copy(te.matrixWorld),j.matrix.invert(),j.matrix.multiply(B.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(B.projectionMatrix),j.projectionMatrixInverse.copy(B.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ji*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return p[j]};let Je=null;function je(j,B){if(h=B.getViewerPose(l||a),g=B,h!==null){const te=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Se=!1;te.length!==O.cameras.length&&(O.cameras.length=0,Se=!0);for(let Ue=0;Ue<te.length;Ue++){const et=te[Ue];let R=null;if(f!==null)R=f.getViewport(et);else{const ze=u.getViewSubImage(d,et);R=ze.viewport,Ue===0&&(e.setRenderTargetTextures(E,ze.colorTexture,ze.depthStencilTexture),e.setRenderTarget(E))}let Fe=P[Ue];Fe===void 0&&(Fe=new Gt,Fe.layers.enable(Ue),Fe.viewport=new it,P[Ue]=Fe),Fe.matrix.fromArray(et.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(et.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(R.x,R.y,R.width,R.height),Ue===0&&(O.matrix.copy(Fe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Se===!0&&O.cameras.push(Fe)}const he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Ue=u.getDepthInformation(te[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,i.renderState)}if(he&&he.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ue=0;Ue<te.length;Ue++){const et=te[Ue].camera;if(et){let R=p[et];R||(R=new iu,p[et]=R);const Fe=u.getCameraImage(et);R.sourceTexture=Fe}}}}for(let te=0;te<C.length;te++){const Se=M[te],he=C[te];Se!==null&&he!==void 0&&he.update(Se,B,l||a)}Je&&Je(j,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}const $e=new ou;$e.setAnimationLoop(je),this.setAnimationLoop=function(j){Je=j},this.dispose=function(){}}}const pi=new St,i_=new Be;function s_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,v,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,w,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),v=w.envMap,E=w.envMapRotation;v&&(m.envMap.value=v,pi.copy(E),pi.x*=-1,pi.y*=-1,pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(i_.makeRotationFromEuler(pi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function r_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,v){const E=v.program;n.uniformBlockBinding(w,E)}function l(w,v){let E=i[w.id];E===void 0&&(g(w),E=h(w),i[w.id]=E,w.addEventListener("dispose",m));const C=v.program;n.updateUBOMapping(w,C);const M=e.render.frame;r[w.id]!==M&&(d(w),r[w.id]=M)}function h(w){const v=u();w.__bindingPointIndex=v;const E=s.createBuffer(),C=w.__size,M=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,E),E}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const v=i[w.id],E=w.uniforms,C=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let M=0,A=E.length;M<A;M++){const N=Array.isArray(E[M])?E[M]:[E[M]];for(let S=0,b=N.length;S<b;S++){const P=N[S];if(f(P,M,S,C)===!0){const O=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let W=0;W<V.length;W++){const q=V[W],J=x(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,O+Y,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,v,E,C){const M=w.value,A=v+"_"+E;if(C[A]===void 0)return typeof M=="number"||typeof M=="boolean"?C[A]=M:C[A]=M.clone(),!0;{const N=C[A];if(typeof M=="number"||typeof M=="boolean"){if(N!==M)return C[A]=M,!0}else if(N.equals(M)===!1)return N.copy(M),!0}return!1}function g(w){const v=w.uniforms;let E=0;const C=16;for(let A=0,N=v.length;A<N;A++){const S=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,P=S.length;b<P;b++){const O=S[b],V=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,W=V.length;Y<W;Y++){const q=V[Y],J=x(q),H=E%C,X=H%J.boundary,ne=H+X;E+=X,ne!==0&&C-ne<J.storage&&(E+=C-ne),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=J.storage}}}const M=E%C;return M>0&&(E+=C-M),w.__size=E,w.__cache={},this}function x(w){const v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ye("WebGLRenderer: Unsupported uniform value type.",w),v}function m(w){const v=w.target;v.removeEventListener("dispose",m);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}const a_=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let kn=null;function o_(){return kn===null&&(kn=new cl(a_,32,32,nl,as),kn.minFilter=Bt,kn.magFilter=Bt,kn.wrapS=En,kn.wrapT=En,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class l_{constructor(e={}){const{canvas:t=Bd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Set([sl,il,tl]),x=new Set([Rn,vi,Ds,Us,Zo,Qo]),m=new Uint32Array(4),p=new Int32Array(4);let w=null,v=null;const E=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let A=!1;this._outputColorSpace=It;let N=0,S=0,b=null,P=-1,O=null;const V=new it,Y=new it;let W=null;const q=new Ee(0);let J=0,H=t.width,X=t.height,ne=1,ge=null,ke=null;const Je=new it(0,0,H,X),je=new it(0,0,H,X);let $e=!1;const j=new ul;let B=!1,te=!1;const Se=new Be,he=new I,Pe=new it,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function et(){return b===null?ne:1}let R=n;function Fe(y,D){return t.getContext(y,D)}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ko}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",xe,!1),R===null){const D="webgl2";if(R=Fe(D,y),R===null)throw Fe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw y("WebGLRenderer: "+y.message),y}let ze,tt,fe,nt,be,Le,T,_,F,$,Z,G,we,le,Te,ve,Q,se,Ie,Ae,de,Ne,L,ce;function re(){ze=new gg(R),ze.init(),Ne=new Zx(R,ze),tt=new og(R,ze,e,Ne),fe=new Kx(R,ze),tt.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),nt=new vg(R),be=new Ox,Le=new Jx(R,ze,fe,be,tt,Ne,nt),T=new cg(M),_=new mg(M),F=new Sp(R),L=new rg(R,F),$=new xg(R,F,nt,L),Z=new yg(R,$,F,nt),Ie=new bg(R,tt,Le),ve=new lg(be),G=new Fx(M,T,_,ze,tt,L,ve),we=new s_(M,be),le=new kx,Te=new Xx(ze),se=new sg(M,T,_,fe,Z,f,c),Q=new $x(M,Z,tt),ce=new r_(R,nt,tt,fe),Ae=new ag(R,ze,nt),de=new _g(R,ze,nt),nt.programs=G.programs,M.capabilities=tt,M.extensions=ze,M.properties=be,M.renderLists=le,M.shadowMap=Q,M.state=fe,M.info=nt}re();const ae=new n_(M,R);this.xr=ae,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(y){y!==void 0&&(ne=y,this.setSize(H,X,!1))},this.getSize=function(y){return y.set(H,X)},this.setSize=function(y,D,k=!0){if(ae.isPresenting){ye("WebGLRenderer: Can't change size while VR device is presenting.");return}H=y,X=D,t.width=Math.floor(y*ne),t.height=Math.floor(D*ne),k===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(H*ne,X*ne).floor()},this.setDrawingBufferSize=function(y,D,k){H=y,X=D,ne=k,t.width=Math.floor(y*k),t.height=Math.floor(D*k),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(V)},this.getViewport=function(y){return y.copy(Je)},this.setViewport=function(y,D,k,z){y.isVector4?Je.set(y.x,y.y,y.z,y.w):Je.set(y,D,k,z),fe.viewport(V.copy(Je).multiplyScalar(ne).round())},this.getScissor=function(y){return y.copy(je)},this.setScissor=function(y,D,k,z){y.isVector4?je.set(y.x,y.y,y.z,y.w):je.set(y,D,k,z),fe.scissor(Y.copy(je).multiplyScalar(ne).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(y){fe.setScissorTest($e=y)},this.setOpaqueSort=function(y){ge=y},this.setTransparentSort=function(y){ke=y},this.getClearColor=function(y){return y.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,k=!0){let z=0;if(y){let U=!1;if(b!==null){const ie=b.texture.format;U=g.has(ie)}if(U){const ie=b.texture.type,ue=x.has(ie),_e=se.getClearColor(),me=se.getClearAlpha(),Re=_e.r,De=_e.g,Me=_e.b;ue?(m[0]=Re,m[1]=De,m[2]=Me,m[3]=me,R.clearBufferuiv(R.COLOR,0,m)):(p[0]=Re,p[1]=De,p[2]=Me,p[3]=me,R.clearBufferiv(R.COLOR,0,p))}else z|=R.COLOR_BUFFER_BIT}D&&(z|=R.DEPTH_BUFFER_BIT),k&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),se.dispose(),le.dispose(),Te.dispose(),be.dispose(),T.dispose(),_.dispose(),Z.dispose(),L.dispose(),ce.dispose(),G.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ol),ae.removeEventListener("sessionend",Bl),oi.stop()};function ee(y){y.preventDefault(),Hr("WebGLRenderer: Context Lost."),A=!0}function K(){Hr("WebGLRenderer: Context Restored."),A=!1;const y=nt.autoReset,D=Q.enabled,k=Q.autoUpdate,z=Q.needsUpdate,U=Q.type;re(),nt.autoReset=y,Q.enabled=D,Q.autoUpdate=k,Q.needsUpdate=z,Q.type=U}function xe(y){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Oe(y){const D=y.target;D.removeEventListener("dispose",Oe),ft(D)}function ft(y){at(y),be.remove(y)}function at(y){const D=be.get(y).programs;D!==void 0&&(D.forEach(function(k){G.releaseProgram(k)}),y.isShaderMaterial&&G.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,k,z,U,ie){D===null&&(D=pt);const ue=U.isMesh&&U.matrixWorld.determinant()<0,_e=Wu(y,D,k,z,U);fe.setMaterial(z,ue);let me=k.index,Re=1;if(z.wireframe===!0){if(me=$.getWireframeAttribute(k),me===void 0)return;Re=2}const De=k.drawRange,Me=k.attributes.position;let Ye=De.start*Re,ot=(De.start+De.count)*Re;ie!==null&&(Ye=Math.max(Ye,ie.start*Re),ot=Math.min(ot,(ie.start+ie.count)*Re)),me!==null?(Ye=Math.max(Ye,0),ot=Math.min(ot,me.count)):Me!=null&&(Ye=Math.max(Ye,0),ot=Math.min(ot,Me.count));const xt=ot-Ye;if(xt<0||xt===1/0)return;L.setup(U,z,_e,k,me);let _t,ht=Ae;if(me!==null&&(_t=F.get(me),ht=de,ht.setIndex(_t)),U.isMesh)z.wireframe===!0?(fe.setLineWidth(z.wireframeLinewidth*et()),ht.setMode(R.LINES)):ht.setMode(R.TRIANGLES);else if(U.isLine){let Ce=z.linewidth;Ce===void 0&&(Ce=1),fe.setLineWidth(Ce*et()),U.isLineSegments?ht.setMode(R.LINES):U.isLineLoop?ht.setMode(R.LINE_LOOP):ht.setMode(R.LINE_STRIP)}else U.isPoints?ht.setMode(R.POINTS):U.isSprite&&ht.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)zs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))ht.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ce=U._multiDrawStarts,mt=U._multiDrawCounts,Qe=U._multiDrawCount,Yt=me?F.get(me).bytesPerElement:1,wi=be.get(z).currentProgram.getUniforms();for(let Kt=0;Kt<Qe;Kt++)wi.setValue(R,"_gl_DrawID",Kt),ht.render(Ce[Kt]/Yt,mt[Kt])}else if(U.isInstancedMesh)ht.renderInstances(Ye,xt,U.count);else if(k.isInstancedBufferGeometry){const Ce=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,mt=Math.min(k.instanceCount,Ce);ht.renderInstances(Ye,xt,mt)}else ht.render(Ye,xt)};function xn(y,D,k){y.transparent===!0&&y.side===dn&&y.forceSinglePass===!1?(y.side=$t,y.needsUpdate=!0,Ks(y,D,k),y.side=Xn,y.needsUpdate=!0,Ks(y,D,k),y.side=dn):Ks(y,D,k)}this.compile=function(y,D,k=null){k===null&&(k=y),v=Te.get(k),v.init(D),C.push(v),k.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),y!==k&&y.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),v.setupLights();const z=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){const _e=ie[ue];xn(_e,k,U),z.add(_e)}else xn(ie,k,U),z.add(ie)}),v=C.pop(),z},this.compileAsync=function(y,D,k=null){const z=this.compile(y,D,k);return new Promise(U=>{function ie(){if(z.forEach(function(ue){be.get(ue).currentProgram.isReady()&&z.delete(ue)}),z.size===0){U(y);return}setTimeout(ie,10)}ze.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let ln=null;function Gu(y){ln&&ln(y)}function Ol(){oi.stop()}function Bl(){oi.start()}const oi=new ou;oi.setAnimationLoop(Gu),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(y){ln=y,ae.setAnimationLoop(y),y===null?oi.stop():oi.start()},ae.addEventListener("sessionstart",Ol),ae.addEventListener("sessionend",Bl),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(D),D=ae.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,D,b),v=Te.get(y,C.length),v.init(D),C.push(v),Se.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),j.setFromProjectionMatrix(Se,Tn,D.reversedDepth),te=this.localClippingEnabled,B=ve.init(this.clippingPlanes,te),w=le.get(y,E.length),w.init(),E.push(w),ae.enabled===!0&&ae.isPresenting===!0){const ie=M.xr.getDepthSensingMesh();ie!==null&&oa(ie,D,-1/0,M.sortObjects)}oa(y,D,0,M.sortObjects),w.finish(),M.sortObjects===!0&&w.sort(ge,ke),Ue=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ue&&se.addToRenderList(w,y),this.info.render.frame++,B===!0&&ve.beginShadows();const k=v.state.shadowsArray;Q.render(k,y,D),B===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=w.opaque,U=w.transmissive;if(v.setupLights(),D.isArrayCamera){const ie=D.cameras;if(U.length>0)for(let ue=0,_e=ie.length;ue<_e;ue++){const me=ie[ue];zl(z,U,y,me)}Ue&&se.render(y);for(let ue=0,_e=ie.length;ue<_e;ue++){const me=ie[ue];kl(w,y,me,me.viewport)}}else U.length>0&&zl(z,U,y,D),Ue&&se.render(y),kl(w,y,D);b!==null&&S===0&&(Le.updateMultisampleRenderTarget(b),Le.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(M,y,D),L.resetDefaultState(),P=-1,O=null,C.pop(),C.length>0?(v=C[C.length-1],B===!0&&ve.setGlobalState(M.clippingPlanes,v.state.camera)):v=null,E.pop(),E.length>0?w=E[E.length-1]:w=null};function oa(y,D,k,z){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)v.pushLight(y),y.castShadow&&v.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||j.intersectsSprite(y)){z&&Pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Se);const ue=Z.update(y),_e=y.material;_e.visible&&w.push(y,ue,_e,k,Pe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||j.intersectsObject(y))){const ue=Z.update(y),_e=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pe.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Pe.copy(ue.boundingSphere.center)),Pe.applyMatrix4(y.matrixWorld).applyMatrix4(Se)),Array.isArray(_e)){const me=ue.groups;for(let Re=0,De=me.length;Re<De;Re++){const Me=me[Re],Ye=_e[Me.materialIndex];Ye&&Ye.visible&&w.push(y,ue,Ye,k,Pe.z,Me)}}else _e.visible&&w.push(y,ue,_e,k,Pe.z,null)}}const ie=y.children;for(let ue=0,_e=ie.length;ue<_e;ue++)oa(ie[ue],D,k,z)}function kl(y,D,k,z){const{opaque:U,transmissive:ie,transparent:ue}=y;v.setupLightsView(k),B===!0&&ve.setGlobalState(M.clippingPlanes,k),z&&fe.viewport(V.copy(z)),U.length>0&&Ys(U,D,k),ie.length>0&&Ys(ie,D,k),ue.length>0&&Ys(ue,D,k),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function zl(y,D,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[z.id]===void 0&&(v.state.transmissionRenderTarget[z.id]=new bi(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?as:Rn,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ie=v.state.transmissionRenderTarget[z.id],ue=z.viewport||V;ie.setSize(ue.z*M.transmissionResolutionScale,ue.w*M.transmissionResolutionScale);const _e=M.getRenderTarget(),me=M.getActiveCubeFace(),Re=M.getActiveMipmapLevel();M.setRenderTarget(ie),M.getClearColor(q),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),Ue&&se.render(k);const De=M.toneMapping;M.toneMapping=ri;const Me=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),v.setupLightsView(z),B===!0&&ve.setGlobalState(M.clippingPlanes,z),Ys(y,k,z),Le.updateMultisampleRenderTarget(ie),Le.updateRenderTargetMipmap(ie),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let ot=0,xt=D.length;ot<xt;ot++){const _t=D[ot],{object:ht,geometry:Ce,material:mt,group:Qe}=_t;if(mt.side===dn&&ht.layers.test(z.layers)){const Yt=mt.side;mt.side=$t,mt.needsUpdate=!0,Vl(ht,k,z,Ce,mt,Qe),mt.side=Yt,mt.needsUpdate=!0,Ye=!0}}Ye===!0&&(Le.updateMultisampleRenderTarget(ie),Le.updateRenderTargetMipmap(ie))}M.setRenderTarget(_e,me,Re),M.setClearColor(q,J),Me!==void 0&&(z.viewport=Me),M.toneMapping=De}function Ys(y,D,k){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ie=y.length;U<ie;U++){const ue=y[U],{object:_e,geometry:me,group:Re}=ue;let De=ue.material;De.allowOverride===!0&&z!==null&&(De=z),_e.layers.test(k.layers)&&Vl(_e,D,k,me,De,Re)}}function Vl(y,D,k,z,U,ie){y.onBeforeRender(M,D,k,z,U,ie),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(M,D,k,z,y,ie),U.transparent===!0&&U.side===dn&&U.forceSinglePass===!1?(U.side=$t,U.needsUpdate=!0,M.renderBufferDirect(k,D,z,U,y,ie),U.side=Xn,U.needsUpdate=!0,M.renderBufferDirect(k,D,z,U,y,ie),U.side=dn):M.renderBufferDirect(k,D,z,U,y,ie),y.onAfterRender(M,D,k,z,U,ie)}function Ks(y,D,k){D.isScene!==!0&&(D=pt);const z=be.get(y),U=v.state.lights,ie=v.state.shadowsArray,ue=U.state.version,_e=G.getParameters(y,U.state,ie,D,k),me=G.getProgramCacheKey(_e);let Re=z.programs;z.environment=y.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(y.isMeshStandardMaterial?_:T).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",Oe),Re=new Map,z.programs=Re);let De=Re.get(me);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===ue)return Gl(y,_e),De}else _e.uniforms=G.getUniforms(y),y.onBeforeCompile(_e,M),De=G.acquireProgram(_e,me),Re.set(me,De),z.uniforms=_e.uniforms;const Me=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Me.clippingPlanes=ve.uniform),Gl(y,_e),z.needsLights=qu(y),z.lightsStateVersion=ue,z.needsLights&&(Me.ambientLightColor.value=U.state.ambient,Me.lightProbe.value=U.state.probe,Me.directionalLights.value=U.state.directional,Me.directionalLightShadows.value=U.state.directionalShadow,Me.spotLights.value=U.state.spot,Me.spotLightShadows.value=U.state.spotShadow,Me.rectAreaLights.value=U.state.rectArea,Me.ltc_1.value=U.state.rectAreaLTC1,Me.ltc_2.value=U.state.rectAreaLTC2,Me.pointLights.value=U.state.point,Me.pointLightShadows.value=U.state.pointShadow,Me.hemisphereLights.value=U.state.hemi,Me.directionalShadowMap.value=U.state.directionalShadowMap,Me.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Me.spotShadowMap.value=U.state.spotShadowMap,Me.spotLightMatrix.value=U.state.spotLightMatrix,Me.spotLightMap.value=U.state.spotLightMap,Me.pointShadowMap.value=U.state.pointShadowMap,Me.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=De,z.uniformsList=null,De}function Hl(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=Nr.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Gl(y,D){const k=be.get(y);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Wu(y,D,k,z,U){D.isScene!==!0&&(D=pt),Le.resetTextureUnits();const ie=D.fog,ue=z.isMeshStandardMaterial?D.environment:null,_e=b===null?M.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Xt,me=(z.isMeshStandardMaterial?_:T).get(z.envMap||ue),Re=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,De=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!k.morphAttributes.position,Ye=!!k.morphAttributes.normal,ot=!!k.morphAttributes.color;let xt=ri;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(xt=M.toneMapping);const _t=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ht=_t!==void 0?_t.length:0,Ce=be.get(z),mt=v.state.lights;if(B===!0&&(te===!0||y!==O)){const kt=y===O&&z.id===P;ve.setState(z,y,kt)}let Qe=!1;z.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==mt.state.version||Ce.outputColorSpace!==_e||U.isBatchedMesh&&Ce.batching===!1||!U.isBatchedMesh&&Ce.batching===!0||U.isBatchedMesh&&Ce.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ce.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ce.instancing===!1||!U.isInstancedMesh&&Ce.instancing===!0||U.isSkinnedMesh&&Ce.skinning===!1||!U.isSkinnedMesh&&Ce.skinning===!0||U.isInstancedMesh&&Ce.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ce.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ce.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ce.instancingMorph===!1&&U.morphTexture!==null||Ce.envMap!==me||z.fog===!0&&Ce.fog!==ie||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ve.numPlanes||Ce.numIntersection!==ve.numIntersection)||Ce.vertexAlphas!==Re||Ce.vertexTangents!==De||Ce.morphTargets!==Me||Ce.morphNormals!==Ye||Ce.morphColors!==ot||Ce.toneMapping!==xt||Ce.morphTargetsCount!==ht)&&(Qe=!0):(Qe=!0,Ce.__version=z.version);let Yt=Ce.currentProgram;Qe===!0&&(Yt=Ks(z,D,U));let wi=!1,Kt=!1,ds=!1;const gt=Yt.getUniforms(),qt=Ce.uniforms;if(fe.useProgram(Yt.program)&&(wi=!0,Kt=!0,ds=!0),z.id!==P&&(P=z.id,Kt=!0),wi||O!==y){fe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),gt.setValue(R,"projectionMatrix",y.projectionMatrix),gt.setValue(R,"viewMatrix",y.matrixWorldInverse);const jt=gt.map.cameraPosition;jt!==void 0&&jt.setValue(R,he.setFromMatrixPosition(y.matrixWorld)),tt.logarithmicDepthBuffer&&gt.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&gt.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),O!==y&&(O=y,Kt=!0,ds=!0)}if(U.isSkinnedMesh){gt.setOptional(R,U,"bindMatrix"),gt.setOptional(R,U,"bindMatrixInverse");const kt=U.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),gt.setValue(R,"boneTexture",kt.boneTexture,Le))}U.isBatchedMesh&&(gt.setOptional(R,U,"batchingTexture"),gt.setValue(R,"batchingTexture",U._matricesTexture,Le),gt.setOptional(R,U,"batchingIdTexture"),gt.setValue(R,"batchingIdTexture",U._indirectTexture,Le),gt.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&gt.setValue(R,"batchingColorTexture",U._colorsTexture,Le));const en=k.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Ie.update(U,k,Yt),(Kt||Ce.receiveShadow!==U.receiveShadow)&&(Ce.receiveShadow=U.receiveShadow,gt.setValue(R,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(qt.envMap.value=me,qt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(qt.envMapIntensity.value=D.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=o_()),Kt&&(gt.setValue(R,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&Xu(qt,ds),ie&&z.fog===!0&&we.refreshFogUniforms(qt,ie),we.refreshMaterialUniforms(qt,z,ne,X,v.state.transmissionRenderTarget[y.id]),Nr.upload(R,Hl(Ce),qt,Le)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Nr.upload(R,Hl(Ce),qt,Le),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&gt.setValue(R,"center",U.center),gt.setValue(R,"modelViewMatrix",U.modelViewMatrix),gt.setValue(R,"normalMatrix",U.normalMatrix),gt.setValue(R,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const kt=z.uniformsGroups;for(let jt=0,la=kt.length;jt<la;jt++){const li=kt[jt];ce.update(li,Yt),ce.bind(li,Yt)}}return Yt}function Xu(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function qu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,D,k){const z=be.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),be.get(y.texture).__webglTexture=D,be.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){const k=be.get(y);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0};const ju=R.createFramebuffer();this.setRenderTarget=function(y,D=0,k=0){b=y,N=D,S=k;let z=!0,U=null,ie=!1,ue=!1;if(y){const me=be.get(y);if(me.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(R.FRAMEBUFFER,null),z=!1;else if(me.__webglFramebuffer===void 0)Le.setupRenderTarget(y);else if(me.__hasExternalTextures)Le.rebindTextures(y,be.get(y.texture).__webglTexture,be.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Me=y.depthTexture;if(me.__boundDepthTexture!==Me){if(Me!==null&&be.has(Me)&&(y.width!==Me.image.width||y.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(y)}}const Re=y.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ue=!0);const De=be.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[D])?U=De[D][k]:U=De[D],ie=!0):y.samples>0&&Le.useMultisampledRTT(y)===!1?U=be.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[k]:U=De,V.copy(y.viewport),Y.copy(y.scissor),W=y.scissorTest}else V.copy(Je).multiplyScalar(ne).floor(),Y.copy(je).multiplyScalar(ne).floor(),W=$e;if(k!==0&&(U=ju),fe.bindFramebuffer(R.FRAMEBUFFER,U)&&z&&fe.drawBuffers(y,U),fe.viewport(V),fe.scissor(Y),fe.setScissorTest(W),ie){const me=be.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,k)}else if(ue){const me=D;for(let Re=0;Re<y.textures.length;Re++){const De=be.get(y.textures[Re]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Re,De.__webglTexture,k,me)}}else if(y!==null&&k!==0){const me=be.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,me.__webglTexture,k)}P=-1},this.readRenderTargetPixels=function(y,D,k,z,U,ie,ue,_e=0){if(!(y&&y.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me){fe.bindFramebuffer(R.FRAMEBUFFER,me);try{const Re=y.textures[_e],De=Re.format,Me=Re.type;if(!tt.textureFormatReadable(De)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Me)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-z&&k>=0&&k<=y.height-U&&(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(D,k,z,U,Ne.convert(De),Ne.convert(Me),ie))}finally{const Re=b!==null?be.get(b).__webglFramebuffer:null;fe.bindFramebuffer(R.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,D,k,z,U,ie,ue,_e=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me)if(D>=0&&D<=y.width-z&&k>=0&&k<=y.height-U){fe.bindFramebuffer(R.FRAMEBUFFER,me);const Re=y.textures[_e],De=Re.format,Me=Re.type;if(!tt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ye),R.bufferData(R.PIXEL_PACK_BUFFER,ie.byteLength,R.STREAM_READ),y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(D,k,z,U,Ne.convert(De),Ne.convert(Me),0);const ot=b!==null?be.get(b).__webglFramebuffer:null;fe.bindFramebuffer(R.FRAMEBUFFER,ot);const xt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await kd(R,xt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ye),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ie),R.deleteBuffer(Ye),R.deleteSync(xt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,k=0){const z=Math.pow(2,-k),U=Math.floor(y.image.width*z),ie=Math.floor(y.image.height*z),ue=D!==null?D.x:0,_e=D!==null?D.y:0;Le.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,ue,_e,U,ie),fe.unbindTexture()};const $u=R.createFramebuffer(),Yu=R.createFramebuffer();this.copyTextureToTexture=function(y,D,k=null,z=null,U=0,ie=null){ie===null&&(U!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=U,U=0):ie=0);let ue,_e,me,Re,De,Me,Ye,ot,xt;const _t=y.isCompressedTexture?y.mipmaps[ie]:y.image;if(k!==null)ue=k.max.x-k.min.x,_e=k.max.y-k.min.y,me=k.isBox3?k.max.z-k.min.z:1,Re=k.min.x,De=k.min.y,Me=k.isBox3?k.min.z:0;else{const en=Math.pow(2,-U);ue=Math.floor(_t.width*en),_e=Math.floor(_t.height*en),y.isDataArrayTexture?me=_t.depth:y.isData3DTexture?me=Math.floor(_t.depth*en):me=1,Re=0,De=0,Me=0}z!==null?(Ye=z.x,ot=z.y,xt=z.z):(Ye=0,ot=0,xt=0);const ht=Ne.convert(D.format),Ce=Ne.convert(D.type);let mt;D.isData3DTexture?(Le.setTexture3D(D,0),mt=R.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Le.setTexture2DArray(D,0),mt=R.TEXTURE_2D_ARRAY):(Le.setTexture2D(D,0),mt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);const Qe=R.getParameter(R.UNPACK_ROW_LENGTH),Yt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),wi=R.getParameter(R.UNPACK_SKIP_PIXELS),Kt=R.getParameter(R.UNPACK_SKIP_ROWS),ds=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,_t.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_t.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Re),R.pixelStorei(R.UNPACK_SKIP_ROWS,De),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Me);const gt=y.isDataArrayTexture||y.isData3DTexture,qt=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){const en=be.get(y),kt=be.get(D),jt=be.get(en.__renderTarget),la=be.get(kt.__renderTarget);fe.bindFramebuffer(R.READ_FRAMEBUFFER,jt.__webglFramebuffer),fe.bindFramebuffer(R.DRAW_FRAMEBUFFER,la.__webglFramebuffer);for(let li=0;li<me;li++)gt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.get(y).__webglTexture,U,Me+li),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.get(D).__webglTexture,ie,xt+li)),R.blitFramebuffer(Re,De,ue,_e,Ye,ot,ue,_e,R.DEPTH_BUFFER_BIT,R.NEAREST);fe.bindFramebuffer(R.READ_FRAMEBUFFER,null),fe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||be.has(y)){const en=be.get(y),kt=be.get(D);fe.bindFramebuffer(R.READ_FRAMEBUFFER,$u),fe.bindFramebuffer(R.DRAW_FRAMEBUFFER,Yu);for(let jt=0;jt<me;jt++)gt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,en.__webglTexture,U,Me+jt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,en.__webglTexture,U),qt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,kt.__webglTexture,ie,xt+jt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,kt.__webglTexture,ie),U!==0?R.blitFramebuffer(Re,De,ue,_e,Ye,ot,ue,_e,R.COLOR_BUFFER_BIT,R.NEAREST):qt?R.copyTexSubImage3D(mt,ie,Ye,ot,xt+jt,Re,De,ue,_e):R.copyTexSubImage2D(mt,ie,Ye,ot,Re,De,ue,_e);fe.bindFramebuffer(R.READ_FRAMEBUFFER,null),fe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else qt?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(mt,ie,Ye,ot,xt,ue,_e,me,ht,Ce,_t.data):D.isCompressedArrayTexture?R.compressedTexSubImage3D(mt,ie,Ye,ot,xt,ue,_e,me,ht,_t.data):R.texSubImage3D(mt,ie,Ye,ot,xt,ue,_e,me,ht,Ce,_t):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ie,Ye,ot,ue,_e,ht,Ce,_t.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ie,Ye,ot,_t.width,_t.height,ht,_t.data):R.texSubImage2D(R.TEXTURE_2D,ie,Ye,ot,ue,_e,ht,Ce,_t);R.pixelStorei(R.UNPACK_ROW_LENGTH,Qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Yt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,wi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Kt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ds),ie===0&&D.generateMipmaps&&R.generateMipmap(mt),fe.unbindTexture()},this.initRenderTarget=function(y){be.get(y).__webglFramebuffer===void 0&&Le.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Le.setTextureCube(y,0):y.isData3DTexture?Le.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Le.setTexture2DArray(y,0):Le.setTexture2D(y,0),fe.unbindTexture()},this.resetState=function(){N=0,S=0,b=null,fe.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class c_{static createButton(e,t={}){const n=document.createElement("button");function i(){if(t.domOverlay===void 0){const d=document.createElement("div");d.style.display="none",document.body.appendChild(d);const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width",38),f.setAttribute("height",38),f.style.position="absolute",f.style.right="20px",f.style.top="20px",f.addEventListener("click",function(){l.end()}),d.appendChild(f);const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width",2),f.appendChild(g),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:d}}let l=null;async function h(d){d.addEventListener("end",u),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),n.textContent="STOP AR",t.domOverlay.root.style.display="",l=d}function u(){l.removeEventListener("end",u),n.textContent="START AR",t.domOverlay.root.style.display="none",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-ar",t).then(h):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(d=>{console.warn(d)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){r(),n.textContent="AR NOT SUPPORTED"}function o(l){r(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="AR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-ar").then(function(l){l?i():a()}).catch(o),n;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}}class ss{static createButton(e,t={}){const n=document.createElement("button");function i(){let l=null;async function h(f){f.addEventListener("end",u),await e.xr.setSession(f),n.textContent="EXIT VR",l=f}function u(){l.removeEventListener("end",u),n.textContent="ENTER VR",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const d={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",d).then(h):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(h).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(h).catch(f=>{console.warn(f)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){r(),n.textContent="VR NOT SUPPORTED"}function o(l){r(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="VR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?i():a(),l&&ss.xrSessionIsGranted&&n.click()}).catch(o),n;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{ss.xrSessionIsGranted=!0})}}}ss.xrSessionIsGranted=!1;ss.registerSessionGrantedListener();class An{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),An.nextNameID=An.nextNameID||0,this.$name.id=`lil-gui-name-${++An.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class h_ extends An{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Go(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const u_={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Go,toHexString:Go},Hs={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},d_={isPrimitive:!1,match:s=>Array.isArray(s)||ArrayBuffer.isView(s),fromHexString(s,e,t=1){const n=Hs.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Hs.toHexString(i)}},f_={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=Hs.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Hs.toHexString(i)}},p_=[u_,Hs,d_,f_];function m_(s){return p_.find(e=>e.match(s))}class g_ extends An{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=m_(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Go(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Wa extends An{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class x_ extends An{constructor(e,t,n,i,r,a){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._stepExplicit&&(w=this._snap(w)),this.setValue(this._clamp(w)))},n=w=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+w),this.$input.value=this.getValue())},i=w=>{w.key==="Enter"&&this.$input.blur(),w.code==="ArrowUp"&&(w.preventDefault(),n(this._step*this._arrowKeyMultiplier(w))),w.code==="ArrowDown"&&(w.preventDefault(),n(this._step*this._arrowKeyMultiplier(w)*-1))},r=w=>{this._inputFocused&&(w.preventDefault(),n(this._step*this._normalizeMouseWheel(w)))};let a=!1,o,c,l,h,u;const d=5,f=w=>{o=w.clientX,c=l=w.clientY,a=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",x)},g=w=>{if(a){const v=w.clientX-o,E=w.clientY-c;Math.abs(E)>d?(w.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>d&&x()}if(!a){const v=w.clientY-l;u-=v*this._step*this._arrowKeyMultiplier(w),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}l=w.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",x)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,w,v,E,C)=>(p-w)/(v-w)*(C-E)+E,t=p=>{const w=this.$slider.getBoundingClientRect();let v=e(p,w.left,w.right,this._min,this._max);this._snapClampSetValue(v)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,o,c;const l=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),a=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(o=p.touches[0].clientX,c=p.touches[0].clientY,a=!0):l(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(a){const w=p.touches[0].clientX-o,v=p.touches[0].clientY-c;Math.abs(w)>Math.abs(v)?l(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let x;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const v=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class __ extends An{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class v_ extends An{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var b_=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function y_(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let lh=!1;class bl{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),c&&this.domElement.classList.add("lil-allow-touch-styles"),!lh&&o&&(y_(b_),lh=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a}add(e,t,n,i,r){if(Object(n)===n)return new __(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new x_(this,e,t,n,i,r);case"boolean":return new h_(this,e,t);case"string":return new v_(this,e,t);case"function":return new Wa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new g_(this,e,t,n)}addFolder(e){const t=new bl({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Wa||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Wa)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}var Ut={};Ut.d=(s,e)=>{for(var t in e)Ut.o(e,t)&&!Ut.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:e[t]})};Ut.o=(s,e)=>Object.prototype.hasOwnProperty.call(s,e);Ut.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var Qt={};Ut.d(Qt,{g1:()=>Zr,gO:()=>Ls,km:()=>Jr,zV:()=>Gs,ol:()=>Fl,uM:()=>Qr,N1:()=>Uu,xv:()=>Nl,PH:()=>ta,UH:()=>ea,ZP:()=>K_,Vx:()=>Nu});var Jr={};Ut.r(Jr);Ut.d(Jr,{COLUMN:()=>na,COLUMN_REVERSE:()=>fu,ROW:()=>Ps,ROW_REVERSE:()=>du,contentDirection:()=>pu});var Zr={};Ut.r(Zr);Ut.d(Zr,{CENTER:()=>wl,END:()=>Sl,START:()=>yl,STRETCH:()=>mu,alignItems:()=>gu,warnAboutDeprecatedAlignItems:()=>xu});var Qr={};Ut.r(Qr);Ut.d(Qr,{CENTER:()=>El,END:()=>Tl,SPACE_AROUND:()=>Cl,SPACE_BETWEEN:()=>Al,SPACE_EVENLY:()=>Rl,START:()=>Ml,justifyContent:()=>_u});var ea={};Ut.r(ea);Ut.d(ea,{NORMAL:()=>ia,NOWRAP:()=>$s,PRE:()=>sa,PRE_LINE:()=>us,PRE_WRAP:()=>ra,WHITE_CHARS:()=>Wo,collapseWhitespaceOnInlines:()=>wu,collapseWhitespaceOnString:()=>vu,newlineBreakability:()=>bu,shouldBreak:()=>yu});var ta={};Ut.r(ta);Ut.d(ta,{CENTER:()=>Ll,JUSTIFY:()=>Il,JUSTIFY_CENTER:()=>Cu,JUSTIFY_LEFT:()=>Tu,JUSTIFY_RIGHT:()=>Xr,LEFT:()=>Mu,RIGHT:()=>Eu,textAlign:()=>Au});var w_=s=>{var e={};return Ut.d(e,s),e};const Ke=w_({BufferAttribute:()=>Tt,BufferGeometry:()=>Ct,CanvasTexture:()=>Of,Color:()=>Ee,FileLoader:()=>pl,LinearFilter:()=>Bt,Mesh:()=>ct,Object3D:()=>dt,Plane:()=>ti,PlaneGeometry:()=>qs,ShaderMaterial:()=>Pn,TextureLoader:()=>ml,Vector2:()=>We,Vector3:()=>I}),Ps="row",du="row-reverse",na="column",fu="column-reverse";function pu(s,e,t,n){let i=t,r="getWidth",a="x",o="y";e.indexOf(na)===0&&(r="getHeight",a="y",o="x");for(let c=0;c<s.childrenBoxes.length;c++){const l=s.childrenBoxes[c],h=l.id,u=l[r](),d=l.margin||0;i+=d*n,s.childrenPos[h]={[a]:i+u/2*n,[o]:0},i+=n*(u+d)}}const yl="start",wl="center",Sl="end",mu="stretch";function gu(s,e){const t=s.getAlignItems();S_.indexOf(t)===-1&&console.warn(`alignItems === '${t}' is not supported`);let n="getWidth",i="x";e.indexOf(Ps)===0&&(n="getHeight",i="y");const r=s[n]()/2-(s.padding||0);s.childrenBoxes.forEach(a=>{let o;switch(t){case Sl:case"right":case"bottom":e.indexOf(Ps)===0?o=-r+a[n]()/2+(a.margin||0):o=r-a[n]()/2-(a.margin||0);break;case yl:case"left":case"top":e.indexOf(Ps)===0?o=r-a[n]()/2-(a.margin||0):o=-r+a[n]()/2+(a.margin||0);break}s.childrenPos[a.id][i]=o||0})}function xu(s){M_.indexOf(s)!==-1&&console.warn(`alignItems === '${s}' is deprecated and will be remove in 7.x.x. Fallback are 'start'|'end'`)}const S_=[yl,wl,Sl,mu,"top","right","bottom","left"],M_=["top","right","bottom","left"],Ml="start",El="center",Tl="end",Cl="space-around",Al="space-between",Rl="space-evenly";function _u(s,e,t,n){const i=s.getJustifyContent();E_.indexOf(i)===-1&&console.warn(`justifyContent === '${i}' is not supported`);const r=e.indexOf("row")===0?"width":"height",a=s.getChildrenSideSum(r),c=(r==="width"?s.getInnerWidth():s.getInnerHeight())-a,l=t*2-a*Math.sign(t),h=T_(i,l),u=C_(s.childrenBoxes,c,i,n),d=e.indexOf("row")===0?"x":"y";s.childrenBoxes.forEach((f,g)=>{s.childrenPos[f.id][d]-=h-u[g]})}const E_=[Ml,El,Tl,Cl,Al,Rl];function T_(s,e){switch(s){case Tl:return e;case El:return e/2}return 0}function C_(s,e,t,n){const i=Array(s.length).fill(0);if(e>0)switch(t){case Al:if(s.length>1){const r=e/(s.length-1)*n;i[0]=0;for(let a=1;a<s.length;a++)i[a]=r*a}break;case Rl:if(s.length>1){const r=e/(s.length+1)*n;for(let a=0;a<s.length;a++)i[a]=r*(a+1)}break;case Cl:if(s.length>1){const r=e/s.length*n,a=r/2;i[0]=a;for(let o=1;o<s.length;o++)i[o]=a+r*o}break}return i}function Pl(s){return class extends s{constructor(t){super(t),this.isBoxComponent=!0,this.childrenPos={}}getInnerWidth(){const t=this.getContentDirection();switch(t){case"row":case"row-reverse":return this.width-(this.padding*2||0)||this.getChildrenSideSum("width");case"column":case"column-reverse":return this.getHighestChildSizeOn("width");default:console.error(`Invalid contentDirection : ${t}`);break}}getInnerHeight(){const t=this.getContentDirection();switch(t){case"row":case"row-reverse":return this.getHighestChildSizeOn("height");case"column":case"column-reverse":return this.height-(this.padding*2||0)||this.getChildrenSideSum("height");default:console.error(`Invalid contentDirection : ${t}`);break}}getChildrenSideSum(t){return this.childrenBoxes.reduce((n,i)=>{const r=i.margin*2||0,a=t==="width"?i.getWidth()+r:i.getHeight()+r;return n+a},0)}setPosFromParentRecords(){this.parentUI&&this.parentUI.childrenPos[this.id]&&(this.position.x=this.parentUI.childrenPos[this.id].x,this.position.y=this.parentUI.childrenPos[this.id].y)}computeChildrenPosition(){if(this.children.length>0){const t=this.getContentDirection();let n;switch(t){case Ps:n=-this.getInnerWidth()/2;break;case du:n=this.getInnerWidth()/2;break;case na:n=this.getInnerHeight()/2;break;case fu:n=-this.getInnerHeight()/2;break}const i=-Math.sign(n);pu(this,t,n,i),_u(this,t,n,i),gu(this,t)}}getHighestChildSizeOn(t){return this.childrenBoxes.reduce((n,i)=>{const r=i.margin||0,a=t==="width"?i.getWidth()+r*2:i.getHeight()+r*2;return Math.max(n,a)},0)}getWidth(){return this.parentUI&&this.parentUI.getAlignItems()==="stretch"&&this.parentUI.getContentDirection().indexOf("column")!==-1?this.parentUI.getWidth()-(this.parentUI.padding*2||0):this.width||this.getInnerWidth()+(this.padding*2||0)}getHeight(){return this.parentUI&&this.parentUI.getAlignItems()==="stretch"&&this.parentUI.getContentDirection().indexOf("row")!==-1?this.parentUI.getHeight()-(this.parentUI.padding*2||0):this.height||this.getInnerHeight()+(this.padding*2||0)}}}const Wo={"	":"	","\n":`
`,"\r":"\r"," ":" "},ia="normal",$s="nowrap",sa="pre",us="pre-line",ra="pre-wrap",vu=function(s,e){switch(e){case $s:case ia:s=s.replace(/\n/g," ");case us:s=s.replace(/[ ]{2,}/g," ");break}return s},bu=function(s){switch(s){case sa:case ra:case us:return"mandatory"}},yu=function(s,e,t,n){const i=s[e];switch(n.WHITESPACE){case ia:case us:case ra:if(i.lineBreak==="mandatory")return!0;const r=i.kerning?i.kerning:0,a=i.xoffset?i.xoffset:0,o=i.xadvance?i.xadvance:i.width;if(t+o+a+r>n.INNER_WIDTH)return!0;const c=Su(s,e,n);return A_(s[e-1],t,c,n);case sa:return i.lineBreak==="mandatory";case $s:default:return!1}},wu=function(s,e){const t=s[0],n=s[s.length-1];switch(e){case ra:t.glyph&&t.glyph===`
`&&s.length>1&&hh([t],s[1]),n.glyph&&n.glyph===`
`&&s.length>1&&ch([n],s[s.length-2]);break;case us:case $s:case ia:let i=[],r;for(let a=0;a<s.length;a++){const o=s[a];if(o.glyph&&Wo[o.glyph]&&s.length>a){i.push(o),r=s[a+1];continue}break}hh(i,r),i=[],r=null;for(let a=s.length-1;a>0;a--){const o=s[a];if(o.glyph&&Wo[o.glyph]&&a>0){i.push(o),r=s[a-1];continue}break}ch(i,r);break;case sa:break;default:return console.warn(`whiteSpace: '${e}' is not valid`),0}return t.offsetX};function ch(s,e){if(e)for(let t=0;t<s.length;t++){const n=s[t];n.width=0,n.height=0,n.offsetX=e.offsetX+e.width}}function hh(s,e){if(e)for(let t=0;t<s.length;t++){const n=s[t];n.width=0,n.height=0,n.offsetX=e.offsetX}}function Su(s,e,t,n){if(n=n||0,!s[e])return n;const i=s[e],r=i.kerning?i.kerning:0,a=i.xoffset?i.xoffset:0,o=i.xadvance?i.xadvance:i.width;return i.lineBreak?n+o:Su(s,e+1,t,n+o+t.LETTERSPACING+a+r)}function A_(s,e,t,n){return!s||!s.glyph||e+t<n.INNER_WIDTH?!1:n.BREAKON.indexOf(s.glyph)>-1}const Mu="left",Eu="right",Ll="center",Il="justify",Tu="justify-left",Xr="justify-right",Cu="justify-center";function Au(s,e,t){for(let n=0;n<s.length;n++){const i=s[n],r=R_(i,e,t,n===s.length-1);for(let a=0;a<i.length;a++)i[a].offsetX+=r;i.x=r}if(e.indexOf(Il)===0)for(let n=0;n<s.length;n++){const i=s[n];if(e.indexOf("-")!==-1&&n===s.length-1)return;const r=t-i.width;if(r<=0)return;let a=0;for(let h=1;h<i.length-1;h++)a+=i[h].glyph===" "?1:0;const o=r/a;let c=1;e===Xr&&(i.reverse(),c=-1);let l=0;for(let h=1;h<=i.length-1;h++){const u=i[h];u.offsetX+=l*c,l+=u.glyph===" "?o:0}e===Xr&&i.reverse()}}const R_=(s,e,t,n)=>{switch(e){case Tu:case Il:case Mu:return-t/2;case Xr:case Eu:return-s.width+t/2;case Ll:return-s.width/2;case Cu:return n?-s.width/2:-t/2;default:console.warn(`textAlign: '${e}' is not valid`)}};function Ru(s){return class extends s{computeInlinesPosition(){const t=this.getWidth()-(this.padding*2||0),n=this.getHeight()-(this.padding*2||0),i=this.getJustifyContent(),r=this.getTextAlign(),a=this.getInterLine(),o=this.computeLines();o.interLine=a;const c=Math.abs(o.height),l=(()=>{switch(i){case"start":return n/2;case"end":return c-n/2;case"center":return c/2;default:console.warn(`justifyContent: '${i}' is not valid`)}})();o.forEach(h=>{h.y+=l,h.forEach(u=>{u.offsetY+=l})}),Au(o,r,t),this.lines=o}calculateBestFit(t){if(this.childrenInlines.length!==0)switch(t){case"grow":this.calculateGrowFit();break;case"shrink":this.calculateShrinkFit();break;case"auto":this.calculateAutoFit();break}}calculateGrowFit(){const t=this.getHeight()-(this.padding*2||0);let n=1;const i=.075,r=this.childrenInlines.find(h=>h.isText);let a=1,o=2,c=r._fitFontSize?r._fitFontSize/r.getFontSize():1,l;do if(l=this.calculateHeight(c),l>t){if(c<=a){this.childrenInlines.forEach(h=>{h.isInlineBlock||(h._fitFontSize=h.getFontSize())});break}o=c,c-=(o-a)/2}else{if(Math.abs(t-l)<i)break;Math.abs(c-o)<5e-10&&(o*=2),a=c,c+=(o-a)/2}while(++n<=10)}calculateShrinkFit(){const t=this.getHeight()-(this.padding*2||0);let n=1;const i=.075,r=this.childrenInlines.find(h=>h.isText);let a=0,o=1,c=r._fitFontSize?r._fitFontSize/r.getFontSize():1,l;do if(l=this.calculateHeight(c),l>t)o=c,c-=(o-a)/2;else{if(c>=o){this.childrenInlines.forEach(h=>{h.isInlineBlock||(h._fitFontSize=h.getFontSize())});break}if(Math.abs(t-l)<i)break;a=c,c+=(o-a)/2}while(++n<=10)}calculateAutoFit(){const t=this.getHeight()-(this.padding*2||0);let n=1;const i=.075,r=this.childrenInlines.find(h=>h.isText);let a=0,o=2,c=r._fitFontSize?r._fitFontSize/r.getFontSize():1,l;do if(l=this.calculateHeight(c),l>t)o=c,c-=(o-a)/2;else{if(Math.abs(t-l)<i)break;Math.abs(c-o)<5e-10&&(o*=2),a=c,c+=(o-a)/2}while(++n<=10)}computeLines(){const t=this.getWidth()-(this.padding*2||0),n=[[]];n.height=0;const i=this.getInterLine();this.childrenInlines.reduce((c,l)=>{if(!l.inlines)return;const h=l._fitFontSize||l.getFontSize(),u=l.isText?l.getLetterSpacing()*h:0,d=l.getWhiteSpace(),f=l.getBreakOn(),g={WHITESPACE:d,LETTERSPACING:u,BREAKON:f,INNER_WIDTH:t};return l.inlines.reduce((m,p,w,v)=>{const E=p.kerning?p.kerning:0,C=p.xoffset?p.xoffset:0,M=p.xadvance?p.xadvance:p.width;return yu(v,w,m,g)?(n.push([p]),p.offsetX=C,p.width===0?0:M+u):(n[n.length-1].push(p),p.offsetX=m+C+E,m+M+E+u)},c)},0);let r=0,a=0,o=-i/2;return n.forEach(c=>{if(c.lineHeight=c.reduce((h,u)=>{const d=u.lineHeight!==void 0?u.lineHeight:u.height;return Math.max(h,d)},0),c.lineBase=c.reduce((h,u)=>{const d=u.lineBase!==void 0?u.lineBase:u.height;return Math.max(h,d)},0),c.width=0,c.height=c.lineHeight,c[0]){const h=this.getWhiteSpace(),u=wu(c,h);c.forEach(d=>{d.offsetX-=u}),c.width=this.computeLineWidth(c),c.width>r&&(r=c.width),c.forEach(d=>{d.offsetY=o-d.height-d.anchor,d.lineHeight<c.lineHeight&&(d.offsetY-=c.lineBase-d.lineBase)}),c.y=o,a+=c.lineHeight+i,o=o-(c.lineHeight+i)}}),n.height=a,n.width=r,n}calculateHeight(t){this.childrenInlines.forEach(i=>{i.isInlineBlock||(i._fitFontSize=i.getFontSize()*t,i.calculateInlines(i._fitFontSize))});const n=this.computeLines();return Math.abs(n.height)}computeLineWidth(t){const n=t[0],i=t[t.length-1];return i.offsetX+i.width+n.offsetX}}}const P_=new Ke.FileLoader,Xo=[],Fr={},L_=new Ke.TextureLoader,qo=[],Or={},Ot={};function I_(s,e){typeof e=="string"?U_(s,e):(Ot[s.id]||(Ot[s.id]={component:s}),Dl(e),Ot[s.id].json=e,s._updateFontFamily(e))}function D_(s,e){qo.indexOf(e)===-1&&(qo.push(e),L_.load(e,t=>{t.generateMipmaps=!1,t.minFilter=Ke.LinearFilter,t.magFilter=Ke.LinearFilter,Or[e]=t;for(const n of Object.keys(Ot))e===Ot[n].textureURL&&Ot[n].component._updateFontTexture(t)})),Ot[s.id]||(Ot[s.id]={component:s}),Ot[s.id].textureURL=e,Or[e]&&s._updateFontTexture(Or[e])}function Pu(s){const e=Ot[s.id];return!e&&s.parentUI?Pu(s.parentUI):e}function U_(s,e){Xo.indexOf(e)===-1&&(Xo.push(e),P_.load(e,t=>{const n=JSON.parse(t);Dl(n),Fr[e]=n;for(const i of Object.keys(Ot))e===Ot[i].jsonURL&&Ot[i].component._updateFontFamily(n)})),Ot[s.id]||(Ot[s.id]={component:s}),Ot[s.id].jsonURL=e,Fr[e]&&s._updateFontFamily(Fr[e])}function Dl(s){if(s._kernings)return;const e={};for(let t=0;t<s.kernings.length;t++){const n=s.kernings[t];if(n.amount===0)continue;const i=String.fromCharCode(n.first,n.second);e[i]=n.amount}s._kernings=e}function N_(s,e,t){t.generateMipmaps=!1,t.minFilter=Ke.LinearFilter,t.magFilter=Ke.LinearFilter,Xo.push(s),Fr[s]=e,Dl(e),t&&(qo.push(s),Or[s]=t)}const F_={setFontFamily:I_,setFontTexture:D_,getFontOf:Pu,addFont:N_},Gs=F_;class _i{static requestUpdate(e,t,n,i){e.traverse(r=>{r.isUI&&(this.requestedUpdates[r.id]?(t&&(this.requestedUpdates[r.id].updateParsing=!0),n&&(this.requestedUpdates[r.id].updateLayout=!0),i&&(this.requestedUpdates[r.id].updateInner=!0)):this.requestedUpdates[r.id]={updateParsing:t,updateLayout:n,updateInner:i,needCallback:t||n||i})})}static register(e){this.components.includes(e)||this.components.push(e)}static disposeOf(e){const t=this.components.indexOf(e);t>-1&&this.components.splice(t,1)}static update(){if(Object.keys(this.requestedUpdates).length>0){const e=this.components.filter(t=>!t.parentUI);e.forEach(t=>this.traverseParsing(t)),e.forEach(t=>this.traverseUpdates(t))}}static traverseParsing(e){const t=this.requestedUpdates[e.id];t&&t.updateParsing&&(e.parseParams(),t.updateParsing=!1),e.childrenUIs.forEach(n=>this.traverseParsing(n))}static traverseUpdates(e){const t=this.requestedUpdates[e.id];delete this.requestedUpdates[e.id],t&&t.updateLayout&&(t.updateLayout=!1,e.updateLayout()),t&&t.updateInner&&(t.updateInner=!1,e.updateInner()),e.childrenUIs.forEach(n=>{this.traverseUpdates(n)}),t&&t.needCallback&&e.onAfterUpdate()}}_i.components=[];_i.requestedUpdates={};const Lt={container:null,fontFamily:null,fontSize:.05,fontKerning:"normal",bestFit:"none",offset:.01,interLine:.01,breakOn:`- ,.:?!
`,whiteSpace:us,contentDirection:na,alignItems:wl,justifyContent:Ml,textAlign:Ll,textType:"MSDF",fontColor:new Ke.Color(16777215),fontOpacity:1,fontPXRange:4,fontSupersampling:!0,borderRadius:.01,borderWidth:0,borderColor:new Ke.Color("black"),borderOpacity:1,backgroundSize:"cover",backgroundColor:new Ke.Color(2236962),backgroundWhiteColor:new Ke.Color(16777215),backgroundOpacity:.8,backgroundOpaqueOpacity:1,getDefaultTexture:O_,hiddenOverflow:!1,letterSpacing:0};let Tr;function O_(){if(!Tr){const s=document.createElement("canvas").getContext("2d");s.canvas.width=1,s.canvas.height=1,s.fillStyle="#ffffff",s.fillRect(0,0,1,1),Tr=new Ke.CanvasTexture(s.canvas),Tr.isDefault=!0}return Tr}function aa(s){return class extends s{constructor(t){super(t),this.states={},this.currentState=void 0,this.isUI=!0,this.autoLayout=!0,this.childrenUIs=[],this.childrenBoxes=[],this.childrenTexts=[],this.childrenInlines=[],this.parentUI=null,this.addEventListener("added",this._rebuildParentUI),this.addEventListener("removed",this._rebuildParentUI)}getClippingPlanes(){const t=[];if(this.parentUI){if(this.isBlock&&this.parentUI.getHiddenOverflow()){const n=this.parentUI.getHeight()/2-(this.parentUI.padding||0),i=this.parentUI.getWidth()/2-(this.parentUI.padding||0),r=[new Ke.Plane(new Ke.Vector3(0,1,0),n),new Ke.Plane(new Ke.Vector3(0,-1,0),n),new Ke.Plane(new Ke.Vector3(1,0,0),i),new Ke.Plane(new Ke.Vector3(-1,0,0),i)];r.forEach(a=>{a.applyMatrix4(this.parent.matrixWorld)}),t.push(...r)}this.parentUI.parentUI&&t.push(...this.parentUI.getClippingPlanes())}return t}getHighestParent(){return this.parentUI?this.parent.getHighestParent():this}_getProperty(t){return this[t]===void 0&&this.parentUI?this.parent._getProperty(t):this[t]!==void 0?this[t]:Lt[t]}getFontSize(){return this._getProperty("fontSize")}getFontKerning(){return this._getProperty("fontKerning")}getLetterSpacing(){return this._getProperty("letterSpacing")}getFontTexture(){return this.fontTexture===void 0&&this.parentUI?this.parent._getProperty("fontTexture"):this.fontTexture!==void 0?this.fontTexture:Lt.getDefaultTexture()}getFontFamily(){return this._getProperty("fontFamily")}getBreakOn(){return this._getProperty("breakOn")}getWhiteSpace(){return this._getProperty("whiteSpace")}getTextAlign(){return this._getProperty("textAlign")}getTextType(){return this._getProperty("textType")}getFontColor(){return this._getProperty("fontColor")}getFontSupersampling(){return this._getProperty("fontSupersampling")}getFontOpacity(){return this._getProperty("fontOpacity")}getFontPXRange(){return this._getProperty("fontPXRange")}getBorderRadius(){return this._getProperty("borderRadius")}getBorderWidth(){return this._getProperty("borderWidth")}getBorderColor(){return this._getProperty("borderColor")}getBorderOpacity(){return this._getProperty("borderOpacity")}getContainer(){return!this.threeOBJ&&this.parent?this.parent.getContainer():this.threeOBJ?this:Lt.container}getParentsNumber(t){return t=t||0,this.parentUI?this.parentUI.getParentsNumber(t+1):t}getBackgroundOpacity(){return!this.backgroundOpacity&&this.backgroundOpacity!==0?Lt.backgroundOpacity:this.backgroundOpacity}getBackgroundColor(){return this.backgroundColor||Lt.backgroundColor}getBackgroundTexture(){return this.backgroundTexture||Lt.getDefaultTexture()}getAlignContent(){return this.alignContent||Lt.alignContent}getAlignItems(){return this.alignItems||Lt.alignItems}getContentDirection(){return this.contentDirection||Lt.contentDirection}getJustifyContent(){return this.justifyContent||Lt.justifyContent}getInterLine(){return this.interLine===void 0?Lt.interLine:this.interLine}getOffset(){return this.offset===void 0?Lt.offset:this.offset}getBackgroundSize(){return this.backgroundSize===void 0?Lt.backgroundSize:this.backgroundSize}getHiddenOverflow(){return this.hiddenOverflow===void 0?Lt.hiddenOverflow:this.hiddenOverflow}getBestFit(){return this.bestFit===void 0?Lt.bestFit:this.bestFit}_rebuildChildrenLists(){this.childrenUIs=this.children.filter(t=>t.isUI),this.childrenBoxes=this.children.filter(t=>t.isBoxComponent),this.childrenInlines=this.children.filter(t=>t.isInline),this.childrenTexts=this.children.filter(t=>t.isText)}_rebuildParentUI=()=>{this.parent&&this.parent.isUI?this.parentUI=this.parent:this.parentUI=null};add(){for(const n of Object.keys(arguments))arguments[n].isInline&&this.update(null,!0);const t=super.add(...arguments);return this._rebuildChildrenLists(),t}remove(){for(const n of Object.keys(arguments))arguments[n].isInline&&this.update(null,!0);const t=super.remove(...arguments);return this._rebuildChildrenLists(),t}update(t,n,i){_i.requestUpdate(this,t,n,i)}onAfterUpdate(){}_updateFontFamily(t){this.fontFamily=t,this.traverse(n=>{n.isUI&&n.update(!0,!0,!1)}),this.getHighestParent().update(!1,!0,!1)}_updateFontTexture(t){this.fontTexture=t,this.getHighestParent().update(!1,!0,!1)}set(t){let n,i,r;if(_i.register(this),!(!t||JSON.stringify(t)===JSON.stringify({}))){t.alignContent&&(t.alignItems=t.alignContent,t.textAlign||(t.textAlign=t.alignContent),console.warn("`alignContent` property has been deprecated, please rely on `alignItems` and `textAlign` instead."),delete t.alignContent),t.alignItems&&xu(t.alignItems);for(const a of Object.keys(t))if(this[a]!=t[a])switch(a){case"content":case"fontSize":case"fontKerning":case"breakOn":case"whiteSpace":this.isText&&(n=!0),i=!0,this[a]=t[a];break;case"bestFit":this.isBlock&&(n=!0,i=!0),this[a]=t[a];break;case"width":case"height":case"padding":(this.isInlineBlock||this.isBlock&&this.getBestFit()!="none")&&(n=!0),i=!0,this[a]=t[a];break;case"letterSpacing":case"interLine":this.isBlock&&this.getBestFit()!="none"&&(n=!0),i=!0,this[a]=t[a];break;case"margin":case"contentDirection":case"justifyContent":case"alignContent":case"alignItems":case"textAlign":case"textType":i=!0,this[a]=t[a];break;case"fontColor":case"fontOpacity":case"fontSupersampling":case"offset":case"backgroundColor":case"backgroundOpacity":case"backgroundTexture":case"backgroundSize":case"borderRadius":case"borderWidth":case"borderColor":case"borderOpacity":r=!0,this[a]=t[a];break;case"hiddenOverflow":this[a]=t[a];break}t.fontFamily&&Gs.setFontFamily(this,t.fontFamily),t.fontTexture&&Gs.setFontTexture(this,t.fontTexture),this.parentUI&&this.parentUI.getBestFit()!="none"&&this.parentUI.update(!0,!0,!1),this.update(n,i,r),i&&this.getHighestParent().update(!1,!0,!1)}}setupState(t){this.states[t.state]={attributes:t.attributes,onSet:t.onSet}}setState(t){const n=this.states[t];if(!n){console.warn(`state "${t}" does not exist within this component:`,this.name);return}t!==this.currentState&&(this.currentState=t,n.onSet&&n.onSet(),n.attributes&&this.set(n.attributes))}clear(){this.traverse(t=>{_i.disposeOf(t),t.material&&t.material.dispose(),t.geometry&&t.geometry.dispose()})}}}function Ul(s){return class extends s{constructor(t){super(t),this.textUniforms={u_texture:{value:this.getFontTexture()},u_color:{value:this.getFontColor()},u_opacity:{value:this.getFontOpacity()},u_pxRange:{value:this.getFontPXRange()},u_useRGSS:{value:this.getFontSupersampling()}},this.backgroundUniforms={u_texture:{value:this.getBackgroundTexture()},u_color:{value:this.getBackgroundColor()},u_opacity:{value:this.getBackgroundOpacity()},u_backgroundMapping:{value:this.getBackgroundSize()},u_borderWidth:{value:this.getBorderWidth()},u_borderColor:{value:this.getBorderColor()},u_borderRadiusTopLeft:{value:this.getBorderRadius()},u_borderRadiusTopRight:{value:this.getBorderRadius()},u_borderRadiusBottomRight:{value:this.getBorderRadius()},u_borderRadiusBottomLeft:{value:this.getBorderRadius()},u_borderOpacity:{value:this.getBorderOpacity()},u_size:{value:new Ke.Vector2(1,1)},u_tSize:{value:new Ke.Vector2(1,1)}}}updateBackgroundMaterial(){this.backgroundUniforms.u_texture.value=this.getBackgroundTexture(),this.backgroundUniforms.u_tSize.value.set(this.backgroundUniforms.u_texture.value.image.width,this.backgroundUniforms.u_texture.value.image.height),this.size&&this.backgroundUniforms.u_size.value.copy(this.size),this.backgroundUniforms.u_texture.value.isDefault?(this.backgroundUniforms.u_color.value=this.getBackgroundColor(),this.backgroundUniforms.u_opacity.value=this.getBackgroundOpacity()):(this.backgroundUniforms.u_color.value=this.backgroundColor||Lt.backgroundWhiteColor,this.backgroundUniforms.u_opacity.value=!this.backgroundOpacity&&this.backgroundOpacity!==0?Lt.backgroundOpaqueOpacity:this.backgroundOpacity),this.backgroundUniforms.u_backgroundMapping.value=(()=>{switch(this.getBackgroundSize()){case"stretch":return 0;case"contain":return 1;case"cover":return 2}})();const t=this.getBorderRadius();this.backgroundUniforms.u_borderWidth.value=this.getBorderWidth(),this.backgroundUniforms.u_borderColor.value=this.getBorderColor(),this.backgroundUniforms.u_borderOpacity.value=this.getBorderOpacity(),Array.isArray(t)?(this.backgroundUniforms.u_borderRadiusTopLeft.value=t[0],this.backgroundUniforms.u_borderRadiusTopRight.value=t[1],this.backgroundUniforms.u_borderRadiusBottomRight.value=t[2],this.backgroundUniforms.u_borderRadiusBottomLeft.value=t[3]):(this.backgroundUniforms.u_borderRadiusTopLeft.value=t,this.backgroundUniforms.u_borderRadiusTopRight.value=t,this.backgroundUniforms.u_borderRadiusBottomRight.value=t,this.backgroundUniforms.u_borderRadiusBottomLeft.value=t)}updateTextMaterial(){this.textUniforms.u_texture.value=this.getFontTexture(),this.textUniforms.u_color.value=this.getFontColor(),this.textUniforms.u_opacity.value=this.getFontOpacity(),this.textUniforms.u_pxRange.value=this.getFontPXRange(),this.textUniforms.u_useRGSS.value=this.getFontSupersampling()}getBackgroundMaterial(){return(!this.backgroundMaterial||!this.backgroundUniforms)&&(this.backgroundMaterial=this._makeBackgroundMaterial()),this.backgroundMaterial}getFontMaterial(){return(!this.fontMaterial||!this.textUniforms)&&(this.fontMaterial=this._makeTextMaterial()),this.fontMaterial}_makeTextMaterial(){return new Ke.ShaderMaterial({uniforms:this.textUniforms,transparent:!0,clipping:!0,vertexShader:B_,fragmentShader:k_,extensions:{derivatives:!0}})}_makeBackgroundMaterial(){return new Ke.ShaderMaterial({uniforms:this.backgroundUniforms,transparent:!0,clipping:!0,vertexShader:z_,fragmentShader:V_,extensions:{derivatives:!0}})}updateClippingPlanes(t){const n=t!==void 0?t:this.getClippingPlanes();JSON.stringify(n)!==JSON.stringify(this.clippingPlanes)&&(this.clippingPlanes=n,this.fontMaterial&&(this.fontMaterial.clippingPlanes=this.clippingPlanes),this.backgroundMaterial&&(this.backgroundMaterial.clippingPlanes=this.clippingPlanes))}}}const B_=`
varying vec2 vUv;

#include <clipping_planes_pars_vertex>

void main() {

	vUv = uv;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
	gl_Position.z -= 0.00001;

	#include <clipping_planes_vertex>

}
`,k_=`

uniform sampler2D u_texture;
uniform vec3 u_color;
uniform float u_opacity;
uniform float u_pxRange;
uniform bool u_useRGSS;

varying vec2 vUv;

#include <clipping_planes_pars_fragment>

// functions from the original msdf repo:
// https://github.com/Chlumsky/msdfgen#using-a-multi-channel-distance-field

float median(float r, float g, float b) {
	return max(min(r, g), min(max(r, g), b));
}

float screenPxRange() {
	vec2 unitRange = vec2(u_pxRange)/vec2(textureSize(u_texture, 0));
	vec2 screenTexSize = vec2(1.0)/fwidth(vUv);
	return max(0.5*dot(unitRange, screenTexSize), 1.0);
}

float tap(vec2 offsetUV) {
	vec3 msd = texture( u_texture, offsetUV ).rgb;
	float sd = median(msd.r, msd.g, msd.b);
	float screenPxDistance = screenPxRange() * (sd - 0.5);
	float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
	return alpha;
}

void main() {

	float alpha;

	if ( u_useRGSS ) {

		// shader-based supersampling based on https://bgolus.medium.com/sharper-mipmapping-using-shader-based-supersampling-ed7aadb47bec
		// per pixel partial derivatives
		vec2 dx = dFdx(vUv);
		vec2 dy = dFdy(vUv);

		// rotated grid uv offsets
		vec2 uvOffsets = vec2(0.125, 0.375);
		vec2 offsetUV = vec2(0.0, 0.0);

		// supersampled using 2x2 rotated grid
		alpha = 0.0;
		offsetUV.xy = vUv + uvOffsets.x * dx + uvOffsets.y * dy;
		alpha += tap(offsetUV);
		offsetUV.xy = vUv - uvOffsets.x * dx - uvOffsets.y * dy;
		alpha += tap(offsetUV);
		offsetUV.xy = vUv + uvOffsets.y * dx - uvOffsets.x * dy;
		alpha += tap(offsetUV);
		offsetUV.xy = vUv - uvOffsets.y * dx + uvOffsets.x * dy;
		alpha += tap(offsetUV);
		alpha *= 0.25;

	} else {

		alpha = tap( vUv );

	}


	// apply the opacity
	alpha *= u_opacity;

	// this is useful to avoid z-fighting when quads overlap because of kerning
	if ( alpha < 0.02) discard;


	gl_FragColor = vec4( u_color, alpha );

	#include <clipping_planes_fragment>

}
`,z_=`
varying vec2 vUv;

#include <clipping_planes_pars_vertex>

void main() {

	vUv = uv;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;

	#include <clipping_planes_vertex>

}
`,V_=`

uniform sampler2D u_texture;
uniform vec3 u_color;
uniform float u_opacity;

uniform float u_borderRadiusTopLeft;
uniform float u_borderRadiusTopRight;
uniform float u_borderRadiusBottomLeft;
uniform float u_borderRadiusBottomRight;
uniform float u_borderWidth;
uniform vec3 u_borderColor;
uniform float u_borderOpacity;
uniform vec2 u_size;
uniform vec2 u_tSize;
uniform int u_backgroundMapping;

varying vec2 vUv;

#include <clipping_planes_pars_fragment>

float getEdgeDist() {
	vec2 ndc = vec2( vUv.x * 2.0 - 1.0, vUv.y * 2.0 - 1.0 );
	vec2 planeSpaceCoord = vec2( u_size.x * 0.5 * ndc.x, u_size.y * 0.5 * ndc.y );
	vec2 corner = u_size * 0.5;
	vec2 offsetCorner = corner - abs( planeSpaceCoord );
	float innerRadDist = min( offsetCorner.x, offsetCorner.y ) * -1.0;
	if (vUv.x < 0.5 && vUv.y >= 0.5) {
		float roundedDist = length( max( abs( planeSpaceCoord ) - u_size * 0.5 + u_borderRadiusTopLeft, 0.0 ) ) - u_borderRadiusTopLeft;
		float s = step( innerRadDist * -1.0, u_borderRadiusTopLeft );
		return mix( innerRadDist, roundedDist, s );
	}
	if (vUv.x >= 0.5 && vUv.y >= 0.5) {
		float roundedDist = length( max( abs( planeSpaceCoord ) - u_size * 0.5 + u_borderRadiusTopRight, 0.0 ) ) - u_borderRadiusTopRight;
		float s = step( innerRadDist * -1.0, u_borderRadiusTopRight );
		return mix( innerRadDist, roundedDist, s );
	}
	if (vUv.x >= 0.5 && vUv.y < 0.5) {
		float roundedDist = length( max( abs( planeSpaceCoord ) - u_size * 0.5 + u_borderRadiusBottomRight, 0.0 ) ) - u_borderRadiusBottomRight;
		float s = step( innerRadDist * -1.0, u_borderRadiusBottomRight );
		return mix( innerRadDist, roundedDist, s );
	}
	if (vUv.x < 0.5 && vUv.y < 0.5) {
		float roundedDist = length( max( abs( planeSpaceCoord ) - u_size * 0.5 + u_borderRadiusBottomLeft, 0.0 ) ) - u_borderRadiusBottomLeft;
		float s = step( innerRadDist * -1.0, u_borderRadiusBottomLeft );
		return mix( innerRadDist, roundedDist, s );
	}
}

vec4 sampleTexture() {
	float textureRatio = u_tSize.x / u_tSize.y;
	float panelRatio = u_size.x / u_size.y;
	vec2 uv = vUv;
	if ( u_backgroundMapping == 1 ) { // contain
		if ( textureRatio < panelRatio ) { // repeat on X
			float newX = uv.x * ( panelRatio / textureRatio );
			newX += 0.5 - 0.5 * ( panelRatio / textureRatio );
			uv.x = newX;
		} else { // repeat on Y
			float newY = uv.y * ( textureRatio / panelRatio );
			newY += 0.5 - 0.5 * ( textureRatio / panelRatio );
			uv.y = newY;
		}
	} else if ( u_backgroundMapping == 2 ) { // cover
		if ( textureRatio < panelRatio ) { // stretch on Y
			float newY = uv.y * ( textureRatio / panelRatio );
			newY += 0.5 - 0.5 * ( textureRatio / panelRatio );
			uv.y = newY;
		} else { // stretch on X
			float newX = uv.x * ( panelRatio / textureRatio );
			newX += 0.5 - 0.5 * ( panelRatio / textureRatio );
			uv.x = newX;
		}
	}
	return texture2D( u_texture, uv ).rgba;
}

void main() {

	float edgeDist = getEdgeDist();
	float change = fwidth( edgeDist );

	vec4 textureSample = sampleTexture();
	vec3 blendedColor = textureSample.rgb * u_color;

	float alpha = smoothstep( change, 0.0, edgeDist );
	float blendedOpacity = u_opacity * textureSample.a * alpha;

	vec4 frameColor = vec4( blendedColor, blendedOpacity );

	if ( u_borderWidth <= 0.0 ) {
		gl_FragColor = frameColor;
	} else {
		vec4 borderColor = vec4( u_borderColor, u_borderOpacity * alpha );
		float stp = smoothstep( edgeDist + change, edgeDist, u_borderWidth * -1.0 );
		gl_FragColor = mix( frameColor, borderColor, stp );
	}

	#include <clipping_planes_fragment>
}
`;class Lu extends Ke.Mesh{constructor(e){const t=new Ke.PlaneGeometry;super(t,e),this.castShadow=!0,this.receiveShadow=!0,this.name="MeshUI-Frame"}}let Br=null;function rs(...s){if(!Br)throw new Error("Cannot use mixins with Base null");let e=Br;Br=null;let t=s.length,n;for(;--t>=0;)n=s[t],e=n(e);return e}rs.withBase=s=>(Br=s,rs);class Ls extends rs.withBase(Ke.Object3D)(Pl,Ru,Ul,aa){constructor(e){super(e),this.isBlock=!0,this.size=new Ke.Vector2(1,1),this.frame=new Lu(this.getBackgroundMaterial()),this.frame.onBeforeRender=()=>{this.updateClippingPlanes&&this.updateClippingPlanes()},this.add(this.frame),this.set(e)}parseParams(){const e=this.getBestFit();e!="none"&&this.childrenTexts.length?this.calculateBestFit(e):this.childrenTexts.forEach(t=>{t._fitFontSize=void 0})}updateLayout(){const e=this.getWidth(),t=this.getHeight();if(!e||!t){console.warn("Block got no dimension from its parameters or from children parameters");return}this.size.set(e,t),this.frame.scale.set(e,t,1),this.frame&&this.updateBackgroundMaterial(),this.frame.renderOrder=this.getParentsNumber(),this.autoLayout&&this.setPosFromParentRecords(),this.childrenInlines.length&&this.computeInlinesPosition(),this.computeChildrenPosition(),this.parentUI&&(this.position.z=this.getOffset())}updateInner(){this.parentUI&&(this.position.z=this.getOffset()),this.frame&&this.updateBackgroundMaterial()}}function Iu(s){return class extends s{constructor(t){super(t),this.isInline=!0}}}function H_(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Ke.BufferGeometry;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(c.userData.mergedUserData=c.userData.mergedUserData||[],c.userData.mergedUserData.push(u.userData),e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=uh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);const g=uh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function uh(s){let e,t,n,i=0;for(let o=0;o<s.length;++o){const c=s[o];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=c.array.length}const r=new e(i);let a=0;for(let o=0;o<s.length;++o)r.set(s[o].array,a),a+=s[o].array.length;return new Ke.BufferAttribute(r,t,n)}class G_ extends Ke.PlaneGeometry{constructor(e,t){const n=e.glyph,i=e.fontSize;super(e.width,e.height),n.match(/\s/g)===null?(t.info.charset.indexOf(n)===-1&&console.error(`The character '${n}' is not included in the font characters set.`),this.mapUVs(t,n),this.transformGeometry(e)):(this.nullifyUVs(),this.scale(0,0,1),this.translate(0,i/2,0))}mapUVs(e,t){const n=e.chars.find(h=>h.char===t),i=e.common,r=n.x/i.scaleW,a=(n.x+n.width)/i.scaleW,o=1-(n.y+n.height)/i.scaleH,c=1-n.y/i.scaleH,l=this.attributes.uv;for(let h=0;h<l.count;h++){let u=l.getX(h),d=l.getY(h);[u,d]=(()=>{switch(h){case 0:return[r,c];case 1:return[a,c];case 2:return[r,o];case 3:return[a,o]}})(),l.setXY(h,u,d)}}nullifyUVs(){const e=this.attributes.uv;for(let t=0;t<e.count;t++)e.setXY(t,0,0)}transformGeometry(e){this.translate(e.width/2,e.height/2,0)}}function W_(s){const e=s.font,t=s.fontSize,n=s.glyph,i=t/e.info.size,r=e.chars.find(u=>u.char===n);let a=r?r.width*i:t/3,o=r?r.height*i:0;a===0&&(a=r?r.xadvance*i:t),o===0&&(o=t*.7),n===`
`&&(a=0);const c=r?r.xadvance*i:a,l=r?r.xoffset*i:0,h=r?r.yoffset*i:0;return{width:a,height:o,anchor:h,xadvance:c,xoffset:l}}function X_(s,e){const t=s._kernings;return t[e]?t[e]:0}function q_(){const s=[];this.inlines.forEach((n,i)=>{s[i]=new G_(n,this.getFontFamily()),s[i].translate(n.offsetX,n.offsetY,0)});const e=H_(s);return new Ke.Mesh(e,this.getFontMaterial())}const Xa={getGlyphDimensions:W_,getGlyphPairKerning:X_,buildText:q_};function j_(s){return class extends s{createText(){const t=this,n=(()=>{switch(this.getTextType()){case"MSDF":return Xa.buildText.call(this);default:console.warn(`'${this.getTextType()}' is not a supported text type.
See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);break}})();return n.renderOrder=1/0,n.onBeforeRender=function(){t.updateClippingPlanes&&t.updateClippingPlanes()},n}getGlyphDimensions(t){switch(t.textType){case"MSDF":return Xa.getGlyphDimensions(t);default:console.warn(`'${t.textType}' is not a supported text type.
See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);break}}getGlyphPairKerning(t,n,i){switch(t){case"MSDF":return Xa.getGlyphPairKerning(n,i);default:console.warn(`'${t}' is not a supported text type.
See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);break}}}}function Du(s){s.children.forEach(e=>{e.children.length>0&&Du(e),s.remove(e),_i.disposeOf(e),e.material&&e.material.dispose(),e.geometry&&e.geometry.dispose()}),s.children=[]}const $_=Du;class Nl extends rs.withBase(Ke.Object3D)(Iu,j_,Ul,aa){constructor(e){super(e),this.isText=!0,this.set(e)}parseParams(){this.calculateInlines(this._fitFontSize||this.getFontSize())}updateLayout(){$_(this),this.inlines&&(this.textContent=this.createText(),this.updateTextMaterial(),this.add(this.textContent)),this.position.z=this.getOffset()}updateInner(){this.position.z=this.getOffset(),this.textContent&&this.updateTextMaterial()}calculateInlines(e){const t=this.content,n=this.getFontFamily(),i=this.getBreakOn(),r=this.getTextType(),a=this.getWhiteSpace();if(!n||typeof n=="string"){Gs.getFontOf(this)||console.warn("no font was found");return}if(!this.content){this.inlines=null;return}if(!r){console.error(`You must provide a 'textType' attribute so three-mesh-ui knows how to render your text.
 See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);return}const o=vu(t,a),c=Array.from?Array.from(o):String(o).split(""),l=e/n.info.size,h=n.common.lineHeight*l,u=n.common.base*l,d=c.map(f=>{const g=this.getGlyphDimensions({textType:r,glyph:f,font:n,fontSize:e});let x=null;return a!==$s&&(i.includes(f)||f.match(/\s/g))&&(x="possible"),f.match(/\n/g)&&(x=bu(a)),{height:g.height,width:g.width,anchor:g.anchor,xadvance:g.xadvance,xoffset:g.xoffset,lineBreak:x,glyph:f,fontSize:e,lineHeight:h,lineBase:u}});if(this.getFontKerning()!=="none")for(let f=1;f<d.length;f++){const g=d[f],x=d[f-1].glyph+d[f].glyph,m=this.getGlyphPairKerning(r,n,x);g.kerning=m*(e/n.info.size)}this.inlines=d}}class Fl extends rs.withBase(Ke.Object3D)(Iu,Pl,Ru,Ul,aa){constructor(e){super(e),this.isInlineBlock=!0,this.size=new Ke.Vector2(1,1),this.frame=new Lu(this.getBackgroundMaterial()),this.frame.onBeforeRender=()=>{this.updateClippingPlanes&&this.updateClippingPlanes()},this.add(this.frame),this.set(e)}parseParams(){this.width||console.warn("inlineBlock has no width. Set to 0.3 by default"),this.height||console.warn("inlineBlock has no height. Set to 0.3 by default"),this.inlines=[{height:this.height||.3,width:this.width||.3,anchor:0,lineBreak:"possible"}]}updateLayout(){const e=this.getWidth(),t=this.getHeight();if(this.inlines){const n=this.inlines[0];this.position.set(n.width/2,n.height/2,0),this.position.x+=n.offsetX,this.position.y+=n.offsetY}this.size.set(e,t),this.frame.scale.set(e,t,1),this.frame&&this.updateBackgroundMaterial(),this.frame.renderOrder=this.getParentsNumber(),this.childrenInlines.length&&this.computeInlinesPosition(),this.computeChildrenPosition(),this.position.z=this.getOffset()}updateInner(){this.position.z=this.getOffset(),this.frame&&this.updateBackgroundMaterial()}}const Qn={fr:[[[{width:.1,chars:[{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"l",upperCase:"L"}]},{width:.1,chars:[{lowerCase:"m",upperCase:"M"}]}],[{width:.2,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"n",upperCase:"N"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],eng:[[[{width:.1,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"l",upperCase:"L"}]}],[{width:.15,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"n",upperCase:"N"}]},{width:.1,chars:[{lowerCase:"m",upperCase:"M"}]},{width:.15,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],ru:[[[{width:1/12,chars:[{lowerCase:"й",upperCase:"Й"},{lowerCase:"q",upperCase:"Q"}]},{width:1/12,chars:[{lowerCase:"ц",upperCase:"Ц"},{lowerCase:"w",upperCase:"W"}]},{width:1/12,chars:[{lowerCase:"у",upperCase:"У"},{lowerCase:"e",upperCase:"E"}]},{width:1/12,chars:[{lowerCase:"к",upperCase:"К"},{lowerCase:"r",upperCase:"R"}]},{width:1/12,chars:[{lowerCase:"е",upperCase:"Е"},{lowerCase:"t",upperCase:"T"}]},{width:1/12,chars:[{lowerCase:"н",upperCase:"Н"},{lowerCase:"y",upperCase:"Y"}]},{width:1/12,chars:[{lowerCase:"г",upperCase:"Г"},{lowerCase:"u",upperCase:"U"}]},{width:1/12,chars:[{lowerCase:"ш",upperCase:"Ш"},{lowerCase:"i",upperCase:"I"}]},{width:1/12,chars:[{lowerCase:"щ",upperCase:"Щ"},{lowerCase:"o",upperCase:"O"}]},{width:1/12,chars:[{lowerCase:"з",upperCase:"З"},{lowerCase:"p",upperCase:"P"}]},{width:1/12,chars:[{lowerCase:"х",upperCase:"Х"},{lowerCase:"{",upperCase:"["}]},{width:1/12,chars:[{lowerCase:"ъ",upperCase:"Ъ"},{lowerCase:"}",upperCase:"]"}]}],[{width:1/12,chars:[{lowerCase:"ф",upperCase:"Ф"},{lowerCase:"a",upperCase:"A"}]},{width:1/12,chars:[{lowerCase:"ы",upperCase:"Ы"},{lowerCase:"s",upperCase:"S"}]},{width:1/12,chars:[{lowerCase:"в",upperCase:"В"},{lowerCase:"d",upperCase:"D"}]},{width:1/12,chars:[{lowerCase:"а",upperCase:"А"},{lowerCase:"f",upperCase:"F"}]},{width:1/12,chars:[{lowerCase:"п",upperCase:"П"},{lowerCase:"g",upperCase:"G"}]},{width:1/12,chars:[{lowerCase:"р",upperCase:"Р"},{lowerCase:"h",upperCase:"H"}]},{width:1/12,chars:[{lowerCase:"о",upperCase:"О"},{lowerCase:"j",upperCase:"J"}]},{width:1/12,chars:[{lowerCase:"л",upperCase:"Л"},{lowerCase:"k",upperCase:"K"}]},{width:1/12,chars:[{lowerCase:"д",upperCase:"Д"},{lowerCase:"l",upperCase:"L"}]},{width:1/12,chars:[{lowerCase:"ж",upperCase:"Ж"},{lowerCase:":",upperCase:";"}]},{width:1/12,chars:[{lowerCase:"э",upperCase:"Э"},{lowerCase:'"',upperCase:"'"}]},{width:1/12,chars:[{lowerCase:"ё",upperCase:"Ё"},{lowerCase:"|",upperCase:"\\"}]}],[{width:1.5/12,command:"shift",chars:[{icon:"shift"}]},{width:1/12,chars:[{lowerCase:"я",upperCase:"Я"},{lowerCase:"z",upperCase:"Z"}]},{width:1/12,chars:[{lowerCase:"ч",upperCase:"Ч"},{lowerCase:"x",upperCase:"X"}]},{width:1/12,chars:[{lowerCase:"с",upperCase:"С"},{lowerCase:"c",upperCase:"C"}]},{width:1/12,chars:[{lowerCase:"м",upperCase:"М"},{lowerCase:"v",upperCase:"V"}]},{width:1/12,chars:[{lowerCase:"и",upperCase:"И"},{lowerCase:"b",upperCase:"B"}]},{width:1/12,chars:[{lowerCase:"т",upperCase:"Т"},{lowerCase:"n",upperCase:"N"}]},{width:1/12,chars:[{lowerCase:"ь",upperCase:"Ь"},{lowerCase:"m",upperCase:"M"}]},{width:1/12,chars:[{lowerCase:"б",upperCase:"Б"},{lowerCase:",",upperCase:""}]},{width:1/12,chars:[{lowerCase:"ю",upperCase:"Ю"},{lowerCase:".",upperCase:""}]},{width:1.5/12,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.15,command:"switch-set",chars:[{lowerCase:"eng"}]},{width:.15,command:"switch",chars:[{lowerCase:".?12"}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.3,command:"switch",chars:[{lowerCase:"АБВ"}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],de:[[[{width:1/11,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:1/11,chars:[{lowerCase:"w",upperCase:"W"}]},{width:1/11,chars:[{lowerCase:"e",upperCase:"E"}]},{width:1/11,chars:[{lowerCase:"r",upperCase:"R"}]},{width:1/11,chars:[{lowerCase:"t",upperCase:"T"}]},{width:1/11,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:1/11,chars:[{lowerCase:"u",upperCase:"U"}]},{width:1/11,chars:[{lowerCase:"i",upperCase:"I"}]},{width:1/11,chars:[{lowerCase:"o",upperCase:"O"}]},{width:1/11,chars:[{lowerCase:"p",upperCase:"P"}]},{width:1/11,chars:[{lowerCase:"ü",upperCase:"Ü"}]}],[{width:1/11,chars:[{lowerCase:"a",upperCase:"A"}]},{width:1/11,chars:[{lowerCase:"s",upperCase:"S"}]},{width:1/11,chars:[{lowerCase:"d",upperCase:"D"}]},{width:1/11,chars:[{lowerCase:"f",upperCase:"F"}]},{width:1/11,chars:[{lowerCase:"g",upperCase:"G"}]},{width:1/11,chars:[{lowerCase:"h",upperCase:"H"}]},{width:1/11,chars:[{lowerCase:"j",upperCase:"J"}]},{width:1/11,chars:[{lowerCase:"k",upperCase:"K"}]},{width:1/11,chars:[{lowerCase:"l",upperCase:"L"}]},{width:1/11,chars:[{lowerCase:"ö",upperCase:"Ö"}]},{width:1/11,chars:[{lowerCase:"ä",upperCase:"Ä"}]}],[{width:2/11,command:"shift",chars:[{icon:"shift"}]},{width:1/11,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:1/11,chars:[{lowerCase:"x",upperCase:"X"}]},{width:1/11,chars:[{lowerCase:"c",upperCase:"C"}]},{width:1/11,chars:[{lowerCase:"v",upperCase:"V"}]},{width:1/11,chars:[{lowerCase:"b",upperCase:"B"}]},{width:1/11,chars:[{lowerCase:"n",upperCase:"N"}]},{width:1/11,chars:[{lowerCase:"m",upperCase:"M"}]},{width:2/11,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],es:[[[{width:.1,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"l",upperCase:"L"}]},{width:.1,chars:[{lowerCase:"ñ",upperCase:"Ñ"}]}],[{width:.15,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"n",upperCase:"N"}]},{width:.1,chars:[{lowerCase:"m",upperCase:"M"}]},{width:.15,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],el:[[[{width:.1,chars:[{lowerCase:";",upperCase:":"},{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"ς",upperCase:"ς"},{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"ε",upperCase:"Ε"},{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"ρ",upperCase:"Ρ"},{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"τ",upperCase:"Τ"},{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"υ",upperCase:"Υ"},{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"θ",upperCase:"Θ"},{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"ι",upperCase:"Ι"},{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"ο",upperCase:"Ο"},{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"π",upperCase:"Π"},{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"α",upperCase:"Α"},{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"σ",upperCase:"Σ"},{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"δ",upperCase:"Δ"},{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"φ",upperCase:"Φ"},{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"γ",upperCase:"Γ"},{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"η",upperCase:"Η"},{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"ξ",upperCase:"Ξ"},{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"κ",upperCase:"Κ"},{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"λ",upperCase:"Λ"},{lowerCase:"l",upperCase:"L"}]}],[{width:.15,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"ζ",upperCase:"Ζ"},{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"χ",upperCase:"Χ"},{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"ψ",upperCase:"Ψ"},{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"ω",upperCase:"Ω"},{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"β",upperCase:"Β"},{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"ν",upperCase:"Ν"},{lowerCase:"n",upperCase:"N"}]},{width:.1,chars:[{lowerCase:"μ",upperCase:"Μ"},{lowerCase:"m",upperCase:"M"}]},{width:.15,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.15,command:"switch-set",chars:[{lowerCase:"eng"}]},{width:.15,command:"switch",chars:[{lowerCase:".?12"}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],nord:[[[{width:1/11,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:1/11,chars:[{lowerCase:"w",upperCase:"W"}]},{width:1/11,chars:[{lowerCase:"e",upperCase:"E"}]},{width:1/11,chars:[{lowerCase:"r",upperCase:"R"}]},{width:1/11,chars:[{lowerCase:"t",upperCase:"T"}]},{width:1/11,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:1/11,chars:[{lowerCase:"u",upperCase:"U"}]},{width:1/11,chars:[{lowerCase:"i",upperCase:"I"}]},{width:1/11,chars:[{lowerCase:"o",upperCase:"O"}]},{width:1/11,chars:[{lowerCase:"p",upperCase:"P"}]},{width:1/11,chars:[{lowerCase:"å",upperCase:"Å"}]}],[{width:1/11,chars:[{lowerCase:"a",upperCase:"A"}]},{width:1/11,chars:[{lowerCase:"s",upperCase:"S"}]},{width:1/11,chars:[{lowerCase:"d",upperCase:"D"}]},{width:1/11,chars:[{lowerCase:"f",upperCase:"F"}]},{width:1/11,chars:[{lowerCase:"g",upperCase:"G"}]},{width:1/11,chars:[{lowerCase:"h",upperCase:"H"}]},{width:1/11,chars:[{lowerCase:"j",upperCase:"J"}]},{width:1/11,chars:[{lowerCase:"k",upperCase:"K"}]},{width:1/11,chars:[{lowerCase:"l",upperCase:"L"}]},{width:1/11,chars:[{lowerCase:"æ",upperCase:"Æ"}]},{width:1/11,chars:[{lowerCase:"ø",upperCase:"Ø"}]}],[{width:2/11,command:"shift",chars:[{icon:"shift"}]},{width:1/11,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:1/11,chars:[{lowerCase:"x",upperCase:"X"}]},{width:1/11,chars:[{lowerCase:"c",upperCase:"C"}]},{width:1/11,chars:[{lowerCase:"v",upperCase:"V"}]},{width:1/11,chars:[{lowerCase:"b",upperCase:"B"}]},{width:1/11,chars:[{lowerCase:"n",upperCase:"N"}]},{width:1/11,chars:[{lowerCase:"m",upperCase:"M"}]},{width:2/11,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]]},Y_=new Ke.TextureLoader;class Uu extends rs.withBase(Ke.Object3D)(Pl,aa){constructor(e){e||(e={}),e.width||(e.width=1),e.height||(e.height=.4),e.margin||(e.margin=.003),e.padding||(e.padding=.01),super(e),this.currentPanel=0,this.isLowerCase=!0,this.charsetCount=1;let t;if(e.language||navigator.language)switch(e.language||navigator.language){case"fr":case"fr-CH":case"fr-CA":t=Qn.fr;break;case"ru":this.charsetCount=2,t=Qn.ru;break;case"de":case"de-DE":case"de-AT":case"de-LI":case"de-CH":t=Qn.de;break;case"es":case"es-419":case"es-AR":case"es-CL":case"es-CO":case"es-ES":case"es-CR":case"es-US":case"es-HN":case"es-MX":case"es-PE":case"es-UY":case"es-VE":t=Qn.es;break;case"el":this.charsetCount=2,t=Qn.el;break;case"nord":t=Qn.nord;break;default:t=Qn.eng;break}else t=Qn.eng;this.keys=[],this.panels=t.map(n=>{const i=e.height/n.length-e.margin*2,r=new Ls({width:e.width+e.padding*2,height:e.height+e.padding*2,offset:0,padding:e.padding,fontFamily:e.fontFamily,fontTexture:e.fontTexture,backgroundColor:e.backgroundColor,backgroundOpacity:e.backgroundOpacity});return r.charset=0,r.add(...n.map(a=>{const o=new Ls({width:e.width,height:i,margin:e.margin,contentDirection:"row",justifyContent:"center"});o.frame.visible=!1;const c=[];return a.forEach(l=>{const h=new Ls({width:e.width*l.width-e.margin*2,height:i,margin:e.margin,justifyContent:"center",offset:0}),u=l.chars[r.charset].lowerCase||l.chars[r.charset].icon||"undif";if(u==="enter"&&e.enterTexture||u==="shift"&&e.shiftTexture||u==="backspace"&&e.backspaceTexture){const d=(()=>{switch(u){case"backspace":return e.backspaceTexture;case"enter":return e.enterTexture;case"shift":return e.shiftTexture;default:console.warn("There is no icon image for this key")}})();Y_.load(d,f=>{h.add(new Fl({width:h.width*.65,height:h.height*.65,backgroundSize:"contain",backgroundTexture:f}))})}else h.add(new Nl({content:u,offset:0}));h.type="Key",h.info=l,h.info.input=u,h.panel=r,c.push(h),this.keys.push(h)}),o.add(...c),o})),r}),this.add(this.panels[0]),this.set(e)}setNextPanel(){this.panels.forEach(e=>{this.remove(e)}),this.currentPanel=(this.currentPanel+1)%this.panels.length,this.add(this.panels[this.currentPanel]),this.update(!0,!0,!0)}setNextCharset(){this.panels[this.currentPanel].charset=(this.panels[this.currentPanel].charset+1)%this.charsetCount,this.keys.forEach(e=>{if(!this.panels[this.currentPanel].getObjectById(e.id))return;const n=e.info.chars[e.panel.charset]||e.info.chars[0],i=this.isLowerCase||!n.upperCase?n.lowerCase:n.upperCase;if(!e.childrenTexts.length)return;const r=e.childrenTexts[0];e.info.input=i,r.set({content:i}),r.update(!0,!0,!0)})}toggleCase(){this.isLowerCase=!this.isLowerCase,this.keys.forEach(e=>{const t=e.info.chars[e.panel.charset]||e.info.chars[0],n=this.isLowerCase||!t.upperCase?t.lowerCase:t.upperCase;if(!e.childrenTexts.length)return;const i=e.childrenTexts[0];e.info.input=n,i.set({content:n}),i.update(!0,!0,!0)})}parseParams(){}updateLayout(){}updateInner(){}}const Nu=()=>_i.update(),Fu={Block:Ls,Text:Nl,InlineBlock:Fl,Keyboard:Uu,FontLibrary:Gs,update:Nu,TextAlign:ta,Whitespace:ea,JustifyContent:Qr,AlignItems:Zr,ContentDirection:Jr};typeof global<"u"&&(global.ThreeMeshUI=Fu);const K_=Fu;Qt.g1;Qt.gO;Qt.km;Qt.zV;Qt.ol;Qt.uM;Qt.N1;Qt.xv;Qt.PH;Qt.UH;var ut=Qt.ZP;Qt.Vx;function J_(){const s=new Cf,e=new Gt(75,window.innerWidth/window.innerHeight,.01,1500);e.position.set(0,0,75);const t=new op(3355443);s.add(t);const n=new l_;return n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=Lh,n.xr.enabled=!0,n.xr.setFramebufferScaleFactor(1.5),document.body.appendChild(n.domElement),{scene:s,camera:e,renderer:n}}async function bt(s){try{const n=(await(await fetch("bodies.json")).json()).bodies.find(i=>i.id.toLowerCase()===s.toLowerCase()||i.englishName&&i.englishName.toLowerCase()===s.toLowerCase());if(!n)throw new Error("Could not find planet!");return{radius:n.meanRadius,distanceToSun:n.semimajorAxis,eccentricity:n.eccentricity,sideralOrbit:n.sideralOrbit}}catch(e){return console.error(e),1}}class _n{constructor(e,t,n,i){this.radius=e,this.texture=t,this.Ring=n,this.cloudTexture=i}}class Cr{constructor(e,t,n){this.innerRadius=e,this.outerRadius=t,this.texture=n}}function vn(s){const e=new es(s.radius,64,32),t=new Vs({map:s.texture}),n=new ct(e,t);if(s.Ring){const i=new fl(s.Ring.innerRadius,s.Ring.outerRadius,64),r=new wt({map:s.Ring.texture,side:dn,transparent:!0}),a=new ct(i,r);a.rotation.x=Math.PI/2,n.add(a)}if(s.cloudTexture){const i=new es(s.radius*1.01,64,32),r=new Vs({map:s.cloudTexture,transparent:!0,opacity:.5}),a=new ct(i,r);n.add(a),a.rotation.y=Math.PI/2}return n}async function Z_(s){const e=new ml,t=1e-6,n=e.load("sun.jpg"),{radius:i}=await bt("sun"),r=new es(i*t,64,32),a=new wt({map:n}),o=new ct(r,a);o.userData.type="planet",o.userData.name="SUN",o.userData.info="The Sun is a Star with an average surface temperature of 5505 C and a diameter of 1392700 km";const c=e.load("mercury.jpg"),{radius:l}=await bt("mercury"),h=new _n(l*s,c),u=vn(h);u.userData.type="planet",u.userData.name="MERCURY",u.userData.info="Mercury is a Terrestrial Planet and the 1st planet from the Sun with an average surface temperature of 167 C and a diameter of 4880 km";const d=e.load("venus.jpg"),{radius:f}=await bt("venus"),g=new _n(f*s,d),x=vn(g);x.userData.type="planet",x.userData.name="VENUS",x.userData.info="Venus is a Terrestrial Planet and the 2nd planet from the Sun with an average surface temperature of 464 C and a diameter of 12104 km";const m=e.load("earth_day.jpg"),p=e.load("earth_clouds.png"),{radius:w}=await bt("earth"),v=new _n(w*s,m,null,p),E=vn(v);E.userData.type="planet",E.userData.name="EARTH",E.userData.info="Earth is a Terrestrial Planet and the 3rd planet from the Sun with an average surface temperature of 15 C and a diameter of 12742 km and 1 moon";const C=e.load("moon.jpg"),{radius:M}=await bt("moon"),A=new _n(M*s,C),N=vn(A);N.userData.type="planet",N.userData.name="MOON",N.userData.info="The Moon is a Natural Satellite orbiting Earth with an average surface temperature of minus 20 C and a diameter of 3474 km";const S=e.load("mars.jpg"),{radius:b}=await bt("mars"),P=new _n(b*s,S),O=vn(P);O.userData.type="planet",O.userData.name="MARS",O.userData.info="Mars is a Terrestrial Planet and the 4th planet from the Sun with an average surface temperature of minus 63 C and a diameter of 6779 km and 2 moons";const V=e.load("jupiter.jpg"),Y=e.load("jupiter_ring.png"),{radius:W}=await bt("jupiter"),q=new Cr(W*s*1.29,W*s*1.72,Y),J=new _n(W*s,V,q),H=vn(J);H.userData.type="planet",H.userData.name="JUPITER",H.userData.info="Jupiter is a Gas Giant and the 5th planet from the Sun with an average surface temperature of minus 108 C and a diameter of 139820 km and 4 rings and 95 moons";const X=e.load("saturn.jpg"),ne=e.load("saturn_ring.png"),{radius:ge}=await bt("saturn"),ke=new Cr(ge*s*1.15,ge*s*2.4,ne),Je=new _n(ge*s,X,ke),je=vn(Je);je.userData.type="planet",je.userData.name="SATURN",je.userData.info="Saturn is a Gas Giant and the 6th planet from the Sun with an average surface temperature of minus 139 C and a diameter of 116460 km and 7 rings and 83 moons";const $e=e.load("uranus.jpg"),j=e.load("uranus_ring.png"),{radius:B}=await bt("uranus"),te=new Cr(B*s*1.5,B*s*2,j),Se=new _n(B*s,$e,te),he=vn(Se);he.userData.type="planet",he.userData.name="URANUS",he.userData.info="Uranus is an Ice Giant and the 7th planet from the Sun with an average surface temperature of minus 197 C and a diameter of 50724 km and 13 rings and 27 moons";const Pe=e.load("neptune.jpg"),pt=e.load("neptune_ring.png"),{radius:Ue}=await bt("neptune"),et=new Cr(Ue*s*1.7,Ue*s*2.56,pt),R=new _n(Ue*s,Pe,et),Fe=vn(R);Fe.userData.type="planet",Fe.userData.name="NEPTUNE",Fe.userData.info="Neptune is an Ice Giant and the 8th planet from the Sun with an average surface temperature of minus 201 C and a diameter of 49244 km and 5 rings and 14 moons";const ze=e.load("pluto.jpg"),{radius:tt}=await bt("pluto"),fe=new _n(tt*s,ze),nt=vn(fe);return nt.userData.type="planet",nt.userData.name="PLUTO",nt.userData.info="Pluto is a Dwarf Planet and the 9th planet from the Sun with an average surface temperature of minus 229 C and a diameter of 2377 km and 5 moons",{meshes:{sun:o,mercury:u,venus:x,earth:E,moon:N,mars:O,jupiter:H,saturn:je,uranus:he,neptune:Fe,pluto:nt}}}const ki=new St(0,0,0,"YXZ"),zi=new I,Q_={type:"change"},ev={type:"lock"},tv={type:"unlock"},dh=.002,fh=Math.PI/2;class nv extends yp{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=iv.bind(this),this._onPointerlockChange=sv.bind(this),this._onPointerlockError=rv.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;zi.setFromMatrixColumn(t.matrix,0),zi.crossVectors(t.up,zi),t.position.addScaledVector(zi,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;zi.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(zi,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function iv(s){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;ki.setFromQuaternion(e.quaternion),ki.y-=s.movementX*dh*this.pointerSpeed,ki.x-=s.movementY*dh*this.pointerSpeed,ki.x=Math.max(fh-this.maxPolarAngle,Math.min(fh-this.minPolarAngle,ki.x)),e.quaternion.setFromEuler(ki),this.dispatchEvent(Q_)}function sv(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(ev),this.isLocked=!0):(this.dispatchEvent(tv),this.isLocked=!1)}function rv(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}function av(s,e){const t=new nv(s,e.domElement);return document.body.addEventListener("click",()=>{t.isLocked||t.lock()}),t}function ov(){const s={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1},e=new I;document.addEventListener("keydown",n=>{switch(n.code){case"KeyW":s.forward=!0;break;case"KeyS":s.backward=!0;break;case"KeyA":s.left=!0;break;case"KeyD":s.right=!0;break;case"Space":s.up=!0;break;case"ShiftLeft":s.down=!0;break}}),document.addEventListener("keyup",n=>{switch(n.code){case"KeyW":s.forward=!1;break;case"KeyS":s.backward=!1;break;case"KeyA":s.left=!1;break;case"KeyD":s.right=!1;break;case"Space":s.up=!1;break;case"ShiftLeft":s.down=!1;break}});function t(n,i,r=pe.flyingSpeed){e.set(0,0,0),s.forward&&(e.z+=r*i),s.backward&&(e.z-=r*i),s.left&&(e.x-=r*i),s.right&&(e.x+=r*i),n.moveRight(e.x),n.moveForward(e.z),s.up&&(n.object.position.y+=r*i),s.down&&(n.object.position.y-=r*i)}return{update:t}}function bn(s,e,t){const n=new dt,i=e,r=i*Math.sqrt(1-Math.pow(t,2)),a=Math.sqrt(i*i-r*r),c=new zf(-a,0,i,r,0,2*Math.PI,!1,0).getPoints(1024),l=new Ct().setFromPoints(c.map(d=>new I(d.x,0,d.y))),h=new Qi({color:16777215}),u=new Xs(l,h);return n.add(u),s.position.set(i,0,0),n.add(s),n}async function lv(s,e){const{distanceToSun:t,eccentricity:n,sideralOrbit:i}=await bt("mercury"),r=bn(s.mercury,t*e,n);r.quaternion.setFromEuler(new St(Mt.degToRad(7),Mt.degToRad(48.331),0));const a={distance:t*e,eccentricity:n,sideralOrbit:i,mesh:s.mercury},{distanceToSun:o,eccentricity:c,sideralOrbit:l}=await bt("venus"),h=bn(s.venus,o*e,c);h.quaternion.setFromEuler(new St(Mt.degToRad(3.39),Mt.degToRad(76.68),0));const u={distance:o*e,eccentricity:c,sideralOrbit:l,mesh:s.venus},{distanceToSun:d,eccentricity:f,sideralOrbit:g}=await bt("earth"),x=bn(s.earth,d*e,f),m={distance:d*e,eccentricity:f,sideralOrbit:g,mesh:s.earth},{eccentricity:p,sideralOrbit:w}=await bt("moon"),v=384400*5,E=bn(s.moon,v*e,p);E.quaternion.setFromEuler(new St(Mt.degToRad(5.145),Mt.degToRad(125.08),0));const C={distance:v*e,eccentricity:p,sideralOrbit:w,mesh:s.moon},{distanceToSun:M,eccentricity:A,sideralOrbit:N}=await bt("mars"),S=bn(s.mars,M*e,A);S.quaternion.setFromEuler(new St(Mt.degToRad(1.85),Mt.degToRad(49.578),0));const b={distance:M*e,eccentricity:A,sideralOrbit:N,mesh:s.mars},{distanceToSun:P,eccentricity:O,sideralOrbit:V}=await bt("jupiter"),Y=bn(s.jupiter,P*e,O);Y.quaternion.setFromEuler(new St(Mt.degToRad(1.31),Mt.degToRad(100.464),0));const W={distance:P*e,eccentricity:O,sideralOrbit:V,mesh:s.jupiter},{distanceToSun:q,eccentricity:J,sideralOrbit:H}=await bt("saturn"),X=bn(s.saturn,q*e,J);X.quaternion.setFromEuler(new St(Mt.degToRad(2.49),Mt.degToRad(113.665),0));const ne={distance:q*e,eccentricity:J,sideralOrbit:H,mesh:s.saturn},{distanceToSun:ge,eccentricity:ke,sideralOrbit:Je}=await bt("uranus"),je=bn(s.uranus,ge*e,ke);je.quaternion.setFromEuler(new St(Mt.degToRad(.77),Mt.degToRad(74.006),0));const $e={distance:ge*e,eccentricity:ke,sideralOrbit:Je,mesh:s.uranus},{distanceToSun:j,eccentricity:B,sideralOrbit:te}=await bt("neptune"),Se=bn(s.neptune,j*e,B);Se.quaternion.setFromEuler(new St(Mt.degToRad(1.77),Mt.degToRad(131.784),0));const he={distance:j*e,eccentricity:B,sideralOrbit:te,mesh:s.neptune},{distanceToSun:Pe,eccentricity:pt,sideralOrbit:Ue}=await bt("pluto"),et=bn(s.pluto,Pe*e,pt);et.quaternion.setFromEuler(new St(Mt.degToRad(17.16),Mt.degToRad(110.299),0));const R={distance:Pe*e,eccentricity:pt,sideralOrbit:Ue,mesh:s.pluto};return{orbits:{mercury:r,venus:h,earth:x,moon:E,mars:S,jupiter:Y,saturn:X,uranus:je,neptune:Se,pluto:et},orbitParams:{mercury:a,venus:u,earth:m,moon:C,mars:b,jupiter:W,saturn:ne,uranus:$e,neptune:he,pluto:R}}}class ph{constructor(e,t,n,i,r){this.startValue=e,this.endValue=t,this.duration=n,this.elapsed=0,this.active=!0,this.onUpdate=i,this.onComplete=r}update(e){if(!this.active)return;this.elapsed+=e;const t=Math.min(this.elapsed/this.duration,1),n=this.startValue+(this.endValue-this.startValue)*t;this.onUpdate(n),t>=1&&(this.active=!1,this.onComplete?.())}isActive(){return this.active}}function mh(s,e){if(e===Cd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Oo||e===Vh){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Oo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class cv extends cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pv(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new uv(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new Av(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Rs.extractUrlBase(e);a=Rs.resolveURL(l,this.path)}else a=Rs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new pl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ou){try{a[qe.KHR_BINARY_GLTF]=new Rv(e)}catch(u){i&&i(u);return}r=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Hv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:a[u]=new dv;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new Pv(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[u]=new Lv;break;case qe.KHR_MESH_QUANTIZATION:a[u]=new Iv;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function hv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class uv{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ee(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Xt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ap(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new au(h),l.distance=u;break;case"spot":l=new ip(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),wn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class dv{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return wt}extendParams(e,t,n){const i=[];e.color=new Ee(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Xt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(i)}}class fv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class pv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(o,o)}return Promise.all(r)}}class mv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class gv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class xv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Xt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,It)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class _v{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class vv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(o[0],o[1],o[2],Xt),Promise.all(r)}}class bv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class yv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(o[0],o[1],o[2],Xt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,It)),Promise.all(r)}}class wv{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Sv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Mv{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Ev{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Tv{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Cv{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Av{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==sn.TRIANGLES&&l.mode!==sn.TRIANGLE_STRIP&&l.mode!==sn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const x=new Be,m=new I,p=new ai,w=new I(1,1,1),v=new Df(g.geometry,g.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,E),c.SCALE&&w.fromBufferAttribute(c.SCALE,E),v.setMatrixAt(E,x.compose(m,p,w));for(const E in c)if(E==="_COLOR_0"){const C=c[E];v.instanceColor=new ko(C.array,C.itemSize,C.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,c[E]);dt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ou="glTF",ws=12,gh={JSON:1313821514,BIN:5130562};class Rv{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ou)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ws,r=new DataView(e,ws);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===gh.JSON){const l=new Uint8Array(e,ws+a,o);this.content=n.decode(l)}else if(c===gh.BIN){const l=ws+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Pv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=jo[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=jo[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=qi[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},o,l,Xt,d)})})}}class Lv{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Iv{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Bu extends js{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,w=1-m,v=p-d+u;for(let E=0;E!==o;E++){const C=a[x+E+o],M=a[x+E+c]*h,A=a[g+E+o],N=a[g+E]*h;r[E]=w*C+v*M+m*A+p*N}return r}}const Dv=new ai;class Uv extends Bu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Dv.fromArray(r).normalize().toArray(r),r}}const sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xh={9728:Wt,9729:Bt,9984:Uh,9985:Pr,9986:Ts,9987:Vn},_h={33071:En,33648:kr,10497:Ki},qa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Nv={CUBICSPLINE:void 0,LINEAR:Bs,STEP:Os},ja={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Fv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Vs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xn})),s.DefaultMaterial}function mi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ov(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Bv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kv(s){let e;const t=s.extensions&&s.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$a(t.attributes):e=s.indices+":"+$a(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+$a(s.targets[n]);return e}function $a(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function $o(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Vv=new Be;class Hv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new ml(this.options.manager):this.textureLoader=new lp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return mi(r,o,i),wn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Rs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=qa[i.type],o=qi[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Tt(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=qa[i.type],l=qi[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(f&&f!==u){const p=Math.floor(d/f),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(w);v||(x=new l(o,p*f,i.count*f/h),v=new Af(x,f/h),t.cache.add(w,v)),m=new ll(v,c,d%f/h,g)}else o===null?x=new l(i.count*c):x=new l(o,d,i.count*c),m=new Tt(x,c,g);if(i.sparse!==void 0){const p=qa.SCALAR,w=qi[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,C=new w(a[1],v,i.sparse.count*p),M=new l(a[2],E,i.sparse.count*c);o!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,N=C.length;A<N;A++){const S=C[A];if(m.setX(S,M[A*c]),c>=2&&m.setY(S,M[A*c+1]),c>=3&&m.setZ(S,M[A*c+2]),c>=4&&m.setW(S,M[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=xh[d.magFilter]||Bt,h.minFilter=xh[d.minFilter]||Vn,h.wrapS=_h[d.wrapS]||Ki,h.wrapT=_h[d.wrapT]||Ki,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Wt&&h.minFilter!==Bt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Et(x);m.needsUpdate=!0,d(m)}),t.load(Rs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),wn(u,a),u.userData.mimeType=a.mimeType||zv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new dl,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Qi,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Vs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){const u=i[qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Xt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,It)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=dn);const h=r.alphaMode||ja.OPAQUE;if(h===ja.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ja.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==wt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new We(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==wt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==wt){const u=r.emissiveFactor;o.emissive=new Ee().setRGB(u[0],u[1],u[2],Xt)}return r.emissiveTexture!==void 0&&a!==wt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,It)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),wn(u,r),t.associations.set(u,{materials:e}),r.extensions&&mi(i,u,r),u})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return vh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=kv(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=vh(new Ct,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?Fv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const x=h[f],m=a[f];let p;const w=l[f];if(m.mode===sn.TRIANGLES||m.mode===sn.TRIANGLE_STRIP||m.mode===sn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Pf(x,w):new ct(x,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===sn.TRIANGLE_STRIP?p.geometry=mh(p.geometry,Vh):m.mode===sn.TRIANGLE_FAN&&(p.geometry=mh(p.geometry,Oo));else if(m.mode===sn.LINES)p=new Qh(x,w);else if(m.mode===sn.LINE_STRIP)p=new Xs(x,w);else if(m.mode===sn.LINE_LOOP)p=new eu(x,w);else if(m.mode===sn.POINTS)p=new tu(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Bv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),wn(p,r),m.extensions&&mi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&mi(i,u[0],r),u[0];const d=new ii;r.extensions&&mi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Mt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Be;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new hl(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,w=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",w)),l.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let v=0,E=d.length;v<E;v++){const C=d[v],M=f[v],A=g[v],N=x[v],S=m[v];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const b=n._createAnimationTracks(C,M,A,N,S);if(b)for(let P=0;P<b.length;P++)p.push(b[P])}const w=new Yf(r,void 0,p);return wn(w,i),w})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Vv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Zh:l.length>1?h=new ii:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),wn(h,r),r.extensions&&mi(n,h,r),r.matrix!==void 0){const u=new Be;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ii;n.name&&(r.name=i.createUniqueName(n.name)),wn(r,n),n.extensions&&mi(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Cn||d instanceof Et)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];ei[r.path]===ei.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(ei[r.path]){case ei.weights:l=ts;break;case ei.rotation:l=ns;break;case ei.translation:case ei.scale:l=is;break;default:switch(n.itemSize){case 1:l=ts;break;case 2:case 3:default:l=is;break}break}const h=i.interpolation!==void 0?Nv[i.interpolation]:Bs,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ei[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=$o(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ns?Uv:Bu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Gv(s,e,t){const n=e.attributes,i=new qn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){const h=$o(qi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,c=new I;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=$o(qi[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Ln;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function vh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=jo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ze.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),wn(s,e),Gv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ov(s,e.targets,t):s})}const vt={ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function ku(s){const e=await fetch(s);if(e.ok)return e.json();throw new Error(e.statusText)}async function Wv(s){if(!s)throw new Error("No basePath supplied");return await ku(`${s}/profilesList.json`)}async function Xv(s,e,t=null,n=!0){if(!s)throw new Error("No xrInputSource supplied");if(!e)throw new Error("No basePath supplied");const i=await Wv(e);let r;if(s.profiles.some(c=>{const l=i[c];return l&&(r={profileId:c,profilePath:`${e}/${l.path}`,deprecated:!!l.deprecated}),!!r}),!r){if(!t)throw new Error("No matching profile name found");const c=i[t];if(!c)throw new Error(`No matching profile name found and default profile "${t}" missing.`);r={profileId:t,profilePath:`${e}/${c.path}`,deprecated:!!c.deprecated}}const a=await ku(r.profilePath);let o;if(n){let c;if(s.handedness==="any"?c=a.layouts[Object.keys(a.layouts)[0]]:c=a.layouts[s.handedness],!c)throw new Error(`No matching handedness, ${s.handedness}, in profile ${r.profileId}`);c.assetPath&&(o=r.profilePath.replace("profile.json",c.assetPath))}return{profile:a,assetPath:o}}const qv={xAxis:0,yAxis:0,button:0,state:vt.ComponentState.DEFAULT};function jv(s=0,e=0){let t=s,n=e;if(Math.sqrt(s*s+e*e)>1){const a=Math.atan2(e,s);t=Math.cos(a),n=Math.sin(a)}return{normalizedXAxis:t*.5+.5,normalizedYAxis:n*.5+.5}}class $v{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===vt.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(qv)}updateFromComponent({xAxis:e,yAxis:t,button:n,state:i}){const{normalizedXAxis:r,normalizedYAxis:a}=jv(e,t);switch(this.componentProperty){case vt.ComponentProperty.X_AXIS:this.value=this.states.includes(i)?r:.5;break;case vt.ComponentProperty.Y_AXIS:this.value=this.states.includes(i)?a:.5;break;case vt.ComponentProperty.BUTTON:this.value=this.states.includes(i)?n:0;break;case vt.ComponentProperty.STATE:this.valueNodeProperty===vt.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(i):this.value=this.states.includes(i)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class Yv{constructor(e,t){if(!e||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(n=>{const i=new $v(t.visualResponses[n]);this.visualResponses[n]=i}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:vt.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=vt.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=vt.ComponentState.PRESSED:(t.touched||this.values.button>vt.ButtonTouchThreshold)&&(this.values.state=vt.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===vt.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>vt.AxisTouchThreshold&&(this.values.state=vt.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===vt.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>vt.AxisTouchThreshold&&(this.values.state=vt.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class Kv{constructor(e,t,n){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=n,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(i=>{const r=this.layoutDescription.components[i];this.components[i]=new Yv(i,r)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach(t=>{e.push(t.data)}),e}updateFromGamepad(){Object.values(this.components).forEach(e=>{e.updateFromGamepad(this.xrInputSource.gamepad)})}}const Jv="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",Zv="generic-trigger";class Qv extends dt{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e?this:(this.envMap=e,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)}),this)}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(n=>{const{valueNode:i,minNode:r,maxNode:a,value:o,valueNodeProperty:c}=n;i&&(c===vt.VisualResponseProperty.VISIBILITY?i.visible=o:c===vt.VisualResponseProperty.TRANSFORM&&(i.quaternion.slerpQuaternions(r.quaternion,a.quaternion,o),i.position.lerpVectors(r.position,a.position,o)))})}))}}function eb(s,e){Object.values(s.components).forEach(t=>{const{type:n,touchPointNodeName:i,visualResponses:r}=t;if(n===vt.ComponentType.TOUCHPAD)if(t.touchPointNode=e.getObjectByName(i),t.touchPointNode){const a=new es(.001),o=new wt({color:255}),c=new ct(a,o);t.touchPointNode.add(c)}else console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);Object.values(r).forEach(a=>{const{valueNodeName:o,minNodeName:c,maxNodeName:l,valueNodeProperty:h}=a;if(h===vt.VisualResponseProperty.TRANSFORM){if(a.minNode=e.getObjectByName(c),a.maxNode=e.getObjectByName(l),!a.minNode){console.warn(`Could not find ${c} in the model`);return}if(!a.maxNode){console.warn(`Could not find ${l} in the model`);return}}a.valueNode=e.getObjectByName(o),a.valueNode||console.warn(`Could not find ${o} in the model`)})})}function bh(s,e){eb(s.motionController,e),s.envMap&&e.traverse(t=>{t.isMesh&&(t.material.envMap=s.envMap,t.material.needsUpdate=!0)}),s.add(e)}class tb{constructor(e=null,t=null){this.gltfLoader=e,this.path=Jv,this._assetCache={},this.onLoad=t,this.gltfLoader||(this.gltfLoader=new cv)}setPath(e){return this.path=e,this}createControllerModel(e){const t=new Qv;let n=null;return e.addEventListener("connected",i=>{const r=i.data;r.targetRayMode!=="tracked-pointer"||!r.gamepad||r.hand||Xv(r,this.path,Zv).then(({profile:a,assetPath:o})=>{t.motionController=new Kv(r,a,o);const c=this._assetCache[t.motionController.assetUrl];if(c)n=c.scene.clone(),bh(t,n),this.onLoad&&this.onLoad(n);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,l=>{this._assetCache[t.motionController.assetUrl]=l,n=l.scene.clone(),bh(t,n),this.onLoad&&this.onLoad(n)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(a=>{console.warn(a)})}),e.addEventListener("disconnected",()=>{t.motionController=null,t.remove(n),n=null}),t}}let rn=null,qr=!1,Ya=null,zu=null,Ss=!0,Ms=!1,Vi=!1,Hi=!1,Is={hoveredUI:null};function Yo(s,e=.03){const t=new ut.Text({content:s,fontSize:.006}),n=new ut.Block({textAlign:"center",padding:.01,fontFamily:"saira.json",fontTexture:"saira.png",justifyContent:"center",width:.11,height:e,offset:.005,margin:.002,borderRadius:.0075});return n.add(t),{panel:n,text:t}}function nn(s){zu.set({content:s}),rn.needsUpdate=!0}function yn(s){return{state:"hovered",attributes:{offset:0,backgroundColor:new Ee(10066329),backgroundOpacity:1,fontColor:new Ee(16777215)},onSet:()=>{nn(s())}}}function Es(){return new ut.Block({contentDirection:"row",justifyContent:"center",columnGap:.005})}function Vu(s,e,t,n,i,r){if(rn===null){rn=new ut.Block({padding:.01,borderRadius:.011,fontSize:.006,fontFamily:"saira.json",fontTexture:"saira.png",justifyContent:"center",contentDirection:"column",rowGap:.005});const a=Yo("Solar System");Ya=a.panel,zu=a.text,rn.add(Ya),Ya.position.set(0,.115,0);const o={width:.11,height:.03,justifyContent:"center",offset:.005,margin:.002,borderRadius:.0075},c={state:"idle",attributes:{offset:0,backgroundColor:new Ee(6710886),backgroundOpacity:.3,fontColor:new Ee(16777215)},onSet:()=>nn("Solar System")},l=new ut.Block(o),h=new ut.Block(o),u=new ut.Block(o),d=new ut.Block(o),f=new ut.Block(o),g=new ut.Block(o),x=new ut.Block(o),m=new ut.Block(o),p=new ut.Block(o),w=new ut.Block(o);l.add(new ut.Text({content:"Increase Time Scale"})),h.add(new ut.Text({content:"Decrease Time Scale"})),u.add(new ut.Text({content:"Increase Flying Speed"})),d.add(new ut.Text({content:"Decrease Flying Speed"})),f.add(new ut.Text({content:"Toggle Orbits"})),g.add(new ut.Text({content:"Toggle Planetary Outlines"})),x.add(new ut.Text({content:"Increase Planetary Outlines Scale"})),m.add(new ut.Text({content:"Decrease Planetary Outlines Scale"})),p.add(new ut.Text({content:"Toggle Lunar Eclipse"})),w.add(new ut.Text({content:"Toggle Solar Eclipse"}));const v={offset:.02,backgroundColor:new Ee(7829367),fontColor:new Ee(2236962)};l.setupState({state:"selected",attributes:v,onSet:()=>{pe.timeScale<1e4?pe.timeScale=1e4:pe.timeScale<1e5?pe.timeScale=Math.ceil((pe.timeScale+.01)/1e4)*1e4:pe.timeScale=Math.ceil((pe.timeScale+.01)/5e4)*5e4,nn(`Time Scale ${pe.timeScale.toString().replace("."," ")}`)}}),l.setupState(yn(()=>`Time Scale ${pe.timeScale.toString().replace("."," ")}`)),l.setupState(c),h.setupState({state:"selected",attributes:v,onSet:()=>{pe.timeScale<=1e4?pe.timeScale=1:pe.timeScale<=1e5?pe.timeScale=Math.floor((pe.timeScale-.01)/1e4)*1e4:pe.timeScale=Math.floor((pe.timeScale-.01)/5e4)*5e4,nn(`Time Scale ${pe.timeScale.toString().replace("."," ")}`)}}),h.setupState(yn(()=>`Time Scale ${pe.timeScale.toString().replace("."," ")}`)),h.setupState(c),u.setupState({state:"selected",attributes:v,onSet:()=>{pe.flyingSpeed<.1?pe.flyingSpeed=.1:pe.flyingSpeed<1?pe.flyingSpeed=Number((Math.ceil((pe.flyingSpeed+.01)/.1)*.1).toFixed(1)):pe.flyingSpeed<10?pe.flyingSpeed=Math.ceil((pe.flyingSpeed+.01)/1)*1:pe.flyingSpeed=Math.ceil((pe.flyingSpeed+.01)/5)*5,nn(`Flying Speed ${pe.flyingSpeed.toString().replace("."," ")}`)}}),u.setupState(yn(()=>`Flying Speed ${pe.flyingSpeed.toString().replace("."," ")}`)),u.setupState(c),d.setupState({state:"selected",attributes:v,onSet:()=>{pe.flyingSpeed<=.1?pe.flyingSpeed=.1:pe.flyingSpeed<=1?pe.flyingSpeed=Number((Math.floor((pe.flyingSpeed-.01)/.1)*.1).toFixed(1)):pe.flyingSpeed<=10?pe.flyingSpeed=Math.floor((pe.flyingSpeed-.01)/1)*1:pe.flyingSpeed=Math.floor((pe.flyingSpeed-.01)/5)*5,nn(`Flying Speed ${pe.flyingSpeed.toString().replace("."," ")}`)}}),d.setupState(yn(()=>`Flying Speed ${pe.flyingSpeed.toString().replace("."," ")}`)),d.setupState(c),f.setupState({state:"selected",attributes:v,onSet:()=>{t.forEach(X=>{X.visible=!Ss}),Ss=!Ss,nn(Ss?"Hide Orbits":"Show Orbits")}}),f.setupState(yn(()=>Ss?"Hide Orbits":"Show Orbits")),f.setupState(c),g.setupState({state:"selected",attributes:v,onSet:()=>{Object.values(n).forEach(X=>{X.visible=!Ms}),Ms=!Ms,nn(Ms?"Hide Outlines":"Show Outlines")}}),g.setupState(yn(()=>Ms?"Hide Outlines":"Show Outlines")),g.setupState(c),x.setupState({state:"selected",attributes:v,onSet:()=>{let X=Object.values(n)[0].scale.x,ne=X<1?.01:X<10?.1:1;X+=ne,X<1?X=1.01:X<10?X=Math.ceil((X+.01)/1)*1:X=Math.ceil((X+.01)/5)*5,Object.values(n).forEach(ge=>{ge.scale.set(X,X,X)}),nn(`Outline Scale ${Object.values(n)[0].scale.x.toString().replace("."," ")}`)}}),x.setupState(yn(()=>`Outline Scale ${Object.values(n)[0].scale.x.toString().replace("."," ")}`)),x.setupState(c),m.setupState({state:"selected",attributes:v,onSet:()=>{let X=Object.values(n)[0].scale.x-1,ne=X<=1?.01:X<=10?.1:1;X+=ne,X<=1.01?X=1.01:X<=10?X=Math.floor((X-.01)/1)*1:X=Math.floor((X-.01)/5)*5,Object.values(n).forEach(ge=>{ge.scale.set(X,X,X)}),nn(`Outline Scale ${Object.values(n)[0].scale.x.toString().replace("."," ")}`)}}),m.setupState(yn(()=>`Outline Scale ${Object.values(n)[0].scale.x.toString().replace("."," ")}`)),m.setupState(c),p.setupState({state:"selected",attributes:v,onSet:()=>{i(!Vi),Vi=!Vi,Hi=!1,nn(Vi?"Deactivate Eclipse":"Activate Eclipse")}}),p.setupState(yn(()=>Vi?"Deactivate Eclipse":"Activate Eclipse")),p.setupState(c),w.setupState({state:"selected",attributes:v,onSet:()=>{r(!Hi),Hi=!Hi,Vi=!1,nn(Hi?"Deactivate Eclipse":"Activate Eclipse")}}),w.setupState(yn(()=>Hi?"Deactivate Eclipse":"Activate Eclipse")),w.setupState(c);const E=new ct(new Ht(.11,.03,.02),new wt({visible:!1}));E.userData={type:"ui",ui:l},l.add(E);const C=new ct(new Ht(.11,.03,.02),new wt({visible:!1}));C.userData={type:"ui",ui:h},h.add(C);const M=new ct(new Ht(.11,.03,.02),new wt({visible:!1}));M.userData={type:"ui",ui:u},u.add(M);const A=new ct(new Ht(.11,.03,.02),new wt({visible:!1}));A.userData={type:"ui",ui:d},d.add(A);const N=new ct(new Ht(.11,.03,.02),new wt({visible:!1}));N.userData={type:"ui",ui:f},f.add(N);const S=new ct(new Ht(.11,.03,.02),new wt({visible:!1}));S.userData={type:"ui",ui:g},g.add(S);const b=new ct(new Ht(.11,.03,.02),new wt({visible:!1}));b.userData={type:"ui",ui:x},x.add(b);const P=new ct(new Ht(.11,.03,.02),new wt({visible:!1}));P.userData={type:"ui",ui:m},m.add(P);const O=new ct(new Ht(.11,.03,.02),new wt({visible:!1}));O.userData={type:"ui",ui:p},p.add(O);const V=new ct(new Ht(.11,.03,.02),new wt({visible:!1}));V.userData={type:"ui",ui:w},w.add(V),s.push(E,C,M,A,N,S,b,P,O,V);const Y=Es();Y.add(l,h);const W=Es();W.add(u,d);const q=Es();q.add(f,g);const J=Es();J.add(x,m);const H=Es();H.add(p,w),rn.add(Y,W,q,J,H),e.add(rn),rn.position.copy(new I(-.075,.125,-.04)),rn.rotation.set(0,1.5,0),qr=!0}else rn.visible=!0,qr=!0,rn.traverse(a=>{a.userData.type==="ui"&&s.push(a)})}function Hu(s){rn!=null&&(rn.visible=!1,qr=!1),s.splice(0,s.length,...s.filter(e=>e.userData.type!=="ui"))}let Sn=null,yh=null,wh=null,Sh=null,Mh=null;function nb(s,e,t){if(Sn===null){Sn=new ut.Block({padding:.01,borderRadius:.011,fontSize:.006,fontFamily:"saira.json",fontTexture:"saira.png",justifyContent:"center",contentDirection:"column",rowGap:.005});const n=Yo("");yh=n.panel,wh=n.text;const i=Yo("",.12);Sh=i.panel,Mh=i.text,Sn.add(yh),Sn.add(Sh),Sn.position.copy(new I(.075,.125,0)),Sn.rotation.set(0,1.5+Math.PI,0),t.add(Sn)}wh.set({content:s}),Mh.set({content:e}),Sn.needsUpdate=!0}function Eh(s,e,t,n){const i=t.userData.gamepad;if(!i)return;let r=i.axes[2],a=i.axes[3];if(!r&&!a&&(r=i.axes[0],a=i.axes[1]),Math.abs(r)>.1||Math.abs(a)>.1){const c=new I(r,0,a).clone().applyQuaternion(s.quaternion);c.normalize().multiplyScalar(pe.flyingSpeed*n),e.position.add(c)}}let Ka=!0;function ib(s,e,t){const n=e.userData.gamepad;if(!n)return;const i=t.userData.gamepad;i&&(n.buttons[3]?.pressed&&!e.userData.optionPressed?(e.userData.optionPressed=!0,qr?Hu(s):Vu(s,e)):n.buttons[3]?.pressed||(e.userData.optionPressed=!1),i.buttons[3]?.pressed&&!t.userData.optionPressed?(t.userData.optionPressed=!0,Ka=!Ka,Sn&&(Sn.visible=Ka)):n.buttons[3]?.pressed||(t.userData.optionPressed=!1))}let Th=new Be;const Ar=new bp;function Ch(s,e,t,n){Th.identity().extractRotation(e.matrixWorld),Ar.ray.origin.setFromMatrixPosition(e.matrixWorld),Ar.ray.direction.set(0,0,-1).applyMatrix4(Th);const i=Ar.intersectObjects(s,!1),r=e.getObjectByName("laser");if(!r)return;const a=r.geometry.attributes.position.array,o=r.geometry.attributes.color.array,c=a.length/3-1;let l=5,h=l,u=65535;if(i.length>0){const d=i[0],f=d.point.distanceTo(Ar.ray.origin);switch(Math.abs(f-d.distance)<.01&&(h=d.distance,u=16711680),d.object.userData.type){case"ui":{const g=d.object.userData.ui;if(!g)return;Is.hoveredUI=g,g.setState("hovered"),s.forEach(x=>{x.userData.type==="ui"&&x!==d.object&&x.userData.ui.setState("idle")});break}case"planet":{nb(d.object.userData.name,d.object.userData.info,n);break}}}i.length===0&&(s.forEach(d=>{d.userData.type==="ui"&&d.userData.ui.setState("idle")}),Is.hoveredUI=null),r.userData.currentColor||(r.userData.currentColor=new Ee(65535)),r.userData.currentColor.lerp(new Ee(u),.06),r.userData.currentDistance===void 0&&(r.userData.currentDistance=l),r.userData.currentDistance+=(h-r.userData.currentDistance)*Math.min(5*t,1);for(let d=0;d<=c;d++){const f=d/c;a[d*3+2]=-f*r.userData.currentDistance,o[d*4+3]=1-f,o[d*4+0]=r.userData.currentColor.r,o[d*4+1]=r.userData.currentColor.g,o[d*4+2]=r.userData.currentColor.b}r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.color.needsUpdate=!0}function sb(s,e=128){if(s.targetRayMode=="tracked-pointer"){const t=new Ct,n=new Float32Array((e+1)*3),i=new Float32Array((e+1)*4);for(let o=0;o<=e;o++){const c=o/e;n[o*3+0]=0,n[o*3+1]=0,n[o*3+2]=-c,i[o*4+0]=0,i[o*4+1]=1,i[o*4+2]=1,i[o*4+3]=1-c}t.setAttribute("position",new Tt(n,3)),t.setAttribute("color",new Tt(i,4));const r=new Qi({vertexColors:!0,transparent:!0}),a=new Xs(t,r);return a.name="laser",a.position.set(0,0,-.049),a}}function rb(){}function ab(){Is.hoveredUI&&(Is.hoveredUI.setState("selected"),Is.hoveredUI=null)}function Ah(s,e,t){const n=s.xr.getControllerGrip(t),r=new tb().createControllerModel(n);n.add(r),e.add(n);const a=s.xr.getController(t);return a.addEventListener("selectstart",rb),a.addEventListener("selectend",ab),a.addEventListener("connected",function(o){this.add(sb(o.data)),this.userData.gamepad=o.data.gamepad,this.userData.handedness=o.data.handedness}),a.addEventListener("disconnected",function(){this.remove(this.children[0]),this.userData.gamepad=void 0,this.userData.handedness=void 0}),e.add(a),a}function Rh(s,e){s.xr.getControllerGrip(e).children.forEach(t=>t.visible=!0)}function Rr(s,e){s.xr.getControllerGrip(e).children.forEach(t=>t.visible=!1)}let pe={flyingSpeed:10,timeScale:1e4};async function ob(){const{scene:s,camera:e,renderer:t}=J_();let n="";const i=c_.createButton(t),r=ss.createButton(t);i.addEventListener("pointerdown",function(){n="ar"}),r.addEventListener("pointerdown",function(){n="vr"}),t.xr.addEventListener("sessionstart",function(){n==="ar"&&(w(),Rr(t,0),Rr(t,1),r.style.display="none"),n==="vr"&&(p(),Rh(t,0),Rh(t,1),i.style.display="none"),ne(),Vu(M,h,N,b,H,X)}),t.xr.addEventListener("sessionend",function(){p(),Rr(t,0),Rr(t,1),ge(),Hu(M),r.style.display="block",i.style.display="block"}),document.body.appendChild(i),document.body.appendChild(r);const a=av(e,t),o=new ii;o.position.set(0,0,75),o.add(a.object),s.add(o);const c=ov(),l=new hp,h=Ah(t,o,0),u=Ah(t,o,1),d=5e4,f=[];for(let B=0;B<d;B++){const te=(Math.random()-.5)*1e4,Se=(Math.random()-.5)*1e4,he=(Math.random()-.5)*1e4;f.push(te,Se,he)}const g=new Ct;g.setAttribute("position",new Dt(f,3));const x=new dl({color:16777215,size:1}),m=new tu(g,x);s.add(m);function p(){m.visible=!0}function w(){m.visible=!1}const{meshes:v}=await Z_(1e-5),{orbits:E,orbitParams:C}=await lv(v,1e-7);s.add(v.sun),s.add(v.moon);let M=Object.values(v);const A=new au(16777215,2,0,0);A.position.copy(v.sun.position),A.castShadow=!0,A.shadow.mapSize.width=1048,A.shadow.mapSize.height=1048,A.shadow.camera.near=1,A.shadow.camera.far=50,s.add(A),v.earth.castShadow=!0,v.earth.receiveShadow=!0,v.moon.castShadow=!0,v.moon.receiveShadow=!0;const N=[];for(const[B,te]of Object.entries(E))B!="moon"&&(s.add(te),N.push(te.children[0]));const S={};for(const B in C)S[B]=0;const b={};for(const[B,te]of Object.entries(v)){const Se=new Bf(te.geometry),he=new Qi({color:16777215}),Pe=new Qh(Se,he);Pe.scale.set(1.01,1.01,1.01),Pe.visible=!1,b[B]=Pe,te.add(Pe)}const P=new bl,O={timeScale:pe.timeScale,flyingSpeed:pe.flyingSpeed,showOrbits:!0,showLunarEclipse:!1,showSolarEclipse:!1,showPlanetaryOutlines:!1,planetaryOutlinesScale:1.01};P.add(O,"timeScale",1,1e8).step(1e4).name("Time Scale").onChange(B=>{pe.timeScale=B}),P.add(O,"flyingSpeed",1,100).step(1).name("Flying Speed").onChange(B=>{pe.flyingSpeed=B}),P.add(O,"showOrbits").name("Show Orbits").onChange(B=>{N.forEach(te=>{te.visible=B})}),P.add(O,"showPlanetaryOutlines").name("Show Planetary Outlines").onChange(B=>{Object.values(b).forEach(te=>{te.visible=B})}),P.add(O,"planetaryOutlinesScale",1.01,100).step(1).name("Planetary Outlines Scale").onChange(B=>{Object.values(b).forEach(te=>{te.scale.set(B,B,B)})});const V=P.add(O,"showLunarEclipse").name("Show Lunar Eclipse").listen(),Y=P.add(O,"showSolarEclipse").name("Show Solar Eclipse").listen();let W=pe.timeScale,q=0,J=null;V.onChange(B=>{H(B)}),Y.onChange(B=>{X(B)});function H(B){B?(O.showSolarEclipse=!1,b.earth.visible=!0,b.moon.visible=!0,b.earth.scale.set(5,5,5),b.moon.scale.set(5,5,5),b.earth.material.color.set(16711680),b.moon.material.color.set(16711680),Y.updateDisplay(),J=new ph(q,0,2,te=>q=te,()=>{pe.timeScale=0,console.log("Lunar eclipse transition complete")})):(pe.timeScale=W,b.earth.visible=!1,b.moon.visible=!1,b.earth.scale.set(1.01,1.01,1.01),b.moon.scale.set(1.01,1.01,1.01),b.earth.material.color.set(16777215),b.moon.material.color.set(16777215))}function X(B){B?(O.showLunarEclipse=!1,b.earth.visible=!0,b.moon.visible=!0,b.earth.scale.set(5,5,5),b.moon.scale.set(5,5,5),b.earth.material.color.set(16711680),b.moon.material.color.set(16711680),V.updateDisplay(),J=new ph(q,1275e3,2,te=>q=te,()=>{pe.timeScale=0,console.log("Solar eclipse transition complete")})):(pe.timeScale=W,b.earth.visible=!1,b.moon.visible=!1,b.earth.scale.set(1.01,1.01,1.01),b.moon.scale.set(1.01,1.01,1.01),b.earth.material.color.set(16777215),b.moon.material.color.set(16777215))}function ne(){P.hide()}function ge(){P.show()}const ke=new Ct,Je=new Float32Array(257*3);ke.setAttribute("position",new Tt(Je,3));const je=new Qi({color:16777215}),$e=new eu(ke,je);s.add($e),N.push($e);function j(){const B=l.getDelta();q+=B*pe.timeScale,c.update(a,B),ut.update(),ib(M,h,u),Eh(e,o,h,B),Eh(e,o,u,B),Ch(M,h,B,u),Ch(M,u,B,u);for(const[te,Se]of Object.entries(C)){const{distance:he,eccentricity:Pe,sideralOrbit:pt,mesh:Ue}=Se,et=2*Math.PI/(pt*24*3600);S[te]=-et*q;const R=he*Math.sqrt(1-Math.pow(Pe,2)),Fe=Math.sqrt(he*he-R*R),ze=he*Math.cos(S[te])-Fe,tt=R*Math.sin(S[te]);if(te==="moon"){const fe=v.earth.position;Ue.position.set(fe.x+ze,fe.y,fe.z+tt);const nt=256,be=$e.geometry.attributes.position.array;for(let Le=0;Le<=nt;Le++){const T=Le/nt*2*Math.PI,_=he*Math.cos(T)-Fe,F=R*Math.sin(T),$=Le*3;be[$]=_,be[$+1]=0,be[$+2]=F}$e.geometry.attributes.position.needsUpdate=!0,$e.position.copy(fe)}else Ue.position.set(ze,0,tt)}J?.isActive()?J.update(B):q+=B*pe.timeScale,v.sun.rotation.y+=2*Math.PI/(600*3600)*B*pe.timeScale,v.mercury.rotation.y+=2*Math.PI/(58.6*24*3600)*B*pe.timeScale,v.venus.rotation.y+=2*Math.PI/(-5832*3600)*B*pe.timeScale,v.earth.rotation.y+=2*Math.PI/(24*3600)*B*pe.timeScale,v.moon.rotation.y+=2*Math.PI/(27.3*24*3600)*B*pe.timeScale,v.mars.rotation.y+=2*Math.PI/(24.6*3600)*B*pe.timeScale,v.jupiter.rotation.y+=2*Math.PI/(9.9*3600)*B*pe.timeScale,v.saturn.rotation.y+=2*Math.PI/(10.7*3600)*B*pe.timeScale,v.uranus.rotation.y+=2*Math.PI/(-17.2*3600)*B*pe.timeScale,v.neptune.rotation.y+=2*Math.PI/(16.1*3600)*B*pe.timeScale,v.pluto.rotation.y+=2*Math.PI/(153.3*3600)*B*pe.timeScale,t.render(s,e)}t.setAnimationLoop(j)}ob();
