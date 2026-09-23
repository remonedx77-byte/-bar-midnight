const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
setTimeout(()=>$('#boot').remove(),800);
$('#counter').textContent=String(2731+Math.floor(Math.random()*20)).padStart(6,'0');
function go(id){$$('.page').forEach(p=>p.classList.toggle('active',p.id===id));scrollTo({top:0,behavior:'smooth'})}
$$('[data-page]').forEach(x=>x.onclick=()=>go(x.dataset.page));$$('.oldlink').forEach(x=>x.onclick=()=>go(x.dataset.page));

const qs=[
['THE COUNTER','カウンターの札には「夜にしか見えないもの」。空を見ろ。英単語1つ。','MOON','夜空に浮かぶもの。'],
['THE REGULAR','4つのメモ：「答えは1ではない」「答えは3である」「答えは2ではない」「答えは4ではない」。正しいのはちょうど3つ。','3','1〜4を実際に代入。'],
['THE LIGHT','Light is low. In old rooms, lamps remember. Give it time. Hold the silence. 最初の文字を読む。','LIGHT','5行の頭文字。'],
['THE BOTTLES','BEER 5%=S / WINE 15%=E / LIQUEUR 20%=V / GIN 40%=E / ABSINTHE 50%=N。低い順に読む。','7','SEVENを数字に。'],
['THE LAST CUSTOMER','1:00=N / 2:00=I / 3:00=G / 4:00=H / 5:00=T。5文字を読む。','NIGHT','そのままつなげる。']
];
const box=$('#puzzles');
qs.forEach((q,i)=>{let a=document.createElement('article');a.className='puzzle';a.innerHTML=`<h3>${i+1}. ${q[0]}</h3><div class="clue">${q[1]}</div><input placeholder="答えを入力"><button>答え合わせ</button><div class="result"></div>`;let inp=a.querySelector('input'),r=a.querySelector('.result');a.querySelector('button').onclick=()=>{if(inp.value.trim().toUpperCase()===q[2]){r.textContent='正解。何かが残されています。';if(i===4)showCard()}else r.textContent='……違います。ヒント：'+q[3]};box.append(a)});

function showCard(){let c=$('#nightCard');c.hidden=false;c.animate([{opacity:0,transform:'translateY(20px) rotate(3deg)'},{opacity:1,transform:'translateY(0) rotate(3deg)'}],{duration:500,fill:'forwards'})}
let card=$('#nightCard'),drag=false,dx=0,dy=0;
card.onpointerdown=e=>{drag=true;card.setPointerCapture(e.pointerId);let r=card.getBoundingClientRect();dx=e.clientX-r.left;dy=e.clientY-r.top;card.style.cursor='grabbing'};
card.onpointermove=e=>{if(drag){card.style.left=e.clientX-dx+'px';card.style.top=e.clientY-dy+'px';card.style.right='auto';card.style.bottom='auto'}};
card.onpointerup=()=>{drag=false;card.style.cursor='grab'};
$('#lightCard').onclick=()=>$('#midnight').classList.toggle('show');

$$('[data-date]').forEach(b=>b.onclick=()=>{$('#dateSecret').textContent={1031:'NIGHT',1103:'BLUE',1104:'……まだ店は終わっていない。'}[b.dataset.date]});
$('#deadlink').onclick=()=>alert('404 NOT FOUND\\nこのページはもうありません。');
$('#secretLink').onclick=()=>alert('管理人用パスワードが必要です。\\nヒント：店主の日記。');
$('#accessSecret').onclick=()=>alert('アクセスカウンターの数字を覚えておいてください。\\n002731……');
$('#finalBtn').onclick=()=>{let v=$('#finalInput').value.trim().toUpperCase(),m=$('#finalMsg');if(v==='MIDNIGHT BLUE'){m.innerHTML='……ご注文、承りました。<br><br><span style="font-size:14px;line-height:2">午前0時。<br>誰もいないカウンターに、グラスがひとつ。<br><br>「また、どこかで。」<br><br>— BAR MIDNIGHT</span>'}else m.textContent='店主「それは、まだ最後の一杯じゃない。」'};
