(function(){

var context = {
  dichotomy: [
    {
      type: 'mindpower',
      title: '根据个人的能量更集中地指向哪里，分为外向和内向两种类型（E-I）',
      choice: [
        {A: '与他人相处精力充沛', B: '独自度过时精力充沛'},
        {A: '希望成为注意的焦点', B: '避免成为注意的焦点'},
        {A: '行动，之后思考', B: '思考，之后行动'},
        {A: '喜欢边想边说出声', B: '在心中思考问题不善于表露'},
        {A: '易于“读”和了解；随意地分享个人信息', B: '相对封闭，更愿意在经过挑选的小群体中分享个人信息'},
        {A: '说的比听的多', B: '听的比说的多'},
        {A: '高度热情地社交', B: '不把热情表现出来'},
        {A: '反应快，喜欢快节奏', B: '仔细考虑后，才有所反应，喜欢慢节奏'},
        {A: '重于广度而不是深度', B: '喜欢深度而不是广度'}
      ]
    },
    {
      type: 'getinfo',
      title: '根据个人收集信息方式的不同，分为观察与直觉两种类型（S-N）',
      choice: [
        {A: '相信确定的有型的事物', B: '相信灵感和推断'},
        {A: '喜欢新想法——它们必须有实际意义', B: '喜欢新思想和概念必须符合自己的意愿'},
        {A: '重视现实性和常识性', B: '重视想象力和独创力'},
        {A: '喜欢使用和琢磨已知的技能', B: '喜欢学习新技能，但掌握之后很容易厌倦了'},
        {A: '留心具体的和特殊的；进行细节描述', B: '留心普遍的和象征性的；使用隐喻和类比'},
        {A: '循序渐进地讲述有关情况', B: '跳跃性地展示事实以一种绕圈子的方式'},
        {A: '着眼于现实或现在', B: '着眼于未来'}
      ]
    },
    {
      type: 'makedecision',
      title: '根据个人做决定方式的不同，分为思维与感觉两种类型（T-F）',
      choice: [
        {A: '退后一步思考，对问题进行客观的分析', B: '超前思考，考虑行为对他人的影响'},
        {A: '重视符合逻辑、公平、公正的价值；一视同仁', B: '重视同情与和睦；重视准则的例外性'},
        {A: '容易发现缺点，有吹毛求疵的倾向，倾向于批评', B: '给人快乐，容易理解别人'},
        {A: '被认为冷酷、麻木、漠不关心', B: '被认为感情过多、缺少逻辑性、软弱'},
        {A: '认为坦率比圆通重要', B: '认为圆通比坦率更重要，说大实话而伤害他人感情是情商低的表现'},
        {A: '只有情感符合逻辑时，才是正确的，才可取', B: '无论是否有意义，认为任何情感都可取'},
        {A: '渴望成就而激励', B: '为了获得欣赏而激励'}
      ]
    },
    {
      type: 'lifestyle',
      title: '根据个人最感到舒适的生活方式，分为判断与探索两种类型（J-P）',
      choice: [
        {A: '做了决定后感到快乐', B: '当各种选择都存在时，感到快乐'},
        {A: '有“工作原则”：先工作再玩（如果有时间的话）', B: '“玩的原则”：先玩再完成工作（如果有时间的话）'},
        {A: '建立目标，并准时地完成', B: '随着新信息的获取，不断改变目标'},
        {A: '愿意知道将要面对的情况', B: '喜欢适应新情况'},
        {A: '着重结果（重点在于完成任务）', B: '着重过程（重点在于如何完成工作）'},
        {A: '满足感来源于完成计划', B: '满足感来源于计划的开始'},
        {A: '把时间看作有限的资源，认真地对待最后期限', B: '认为时间是可更新的资源，而最后期限也是有收缩的'}
      ]
    }
  ]
};

var myForm = document.getElementById('myForm');

var mindpower = getinfo = makedecision = lifestyle = '';

/**
 * 统计选项
 * @function
 * @param {String} ele - 衡量人格类型的纬度的 id
 * @return {Object} 每个维度里选中的A/B选项个数
 */
function account(ele) {
  var len = document.querySelectorAll('#'+ ele + ' [type="radio"]').length/2,
        i = a = b = 0;

  for (i; i < len; i++) {
    if (document.forms['myForm'].elements[ele + i].value === "true") {
      a++
    } else {
      b++
    }
  }

  return {type: ele, A: a, B: b}
}


/**
 * 绘制结果图
 * @function
 * @param {Object} ele - 该维度里选中的A/B选项个数
 * @return {Boolean} 该维度里选A的是否比选B的多
 */
function drawchart(obj) {
  var ele = document.querySelector('#result .'+ obj.type),
  a = obj.A, b = obj.B;

  document.querySelector('#result .'+ obj.type + '>div').style.width = Math.round(a/(a+b)*100) + '%';

  if (a > b) {
    ele.classList.add('a-type')
    return true
  } else {
    ele.classList.add('b-type')
    return false
  }
}

myForm.innerHTML = Handlebars.templates.choice(context);

myForm.addEventListener('submit', function(event){
  event.preventDefault()
  if (!event.target.checkValidity()) {
    alert('Please, fill the form'); // error message
  } else {
    mindpower = drawchart(account('mindpower')) ? 'E' : 'I';
    getinfo = drawchart(account('getinfo')) ? 'S' : 'N';
    makedecision = drawchart(account('makedecision')) ? 'T' : 'F';
    lifestyle = drawchart(account('lifestyle')) ? 'J' : 'P';

    document.querySelector('#result output').innerHTML = mindpower + getinfo + makedecision + lifestyle;
    document.getElementById('result').style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
  }
});

})()
