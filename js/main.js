(function(){

var context = {
  dichotomy: [
    {
      type: 'mindpower',
      title: '根据个人的能量更集中地指向哪里，分为外向和内向两种类型（E-I）',
      choice: [
        {A: '与他人相处时精力充沛', B: '独自度过时精力充沛'},
        {A: '希望成为注意的焦点', B: '避免成为注意的焦点'},
        {A: '倾向于行动之后思考，再进一步采取行动', B: '倾向于认真思考之后行动，再进一步深思'},
        {A: '喜欢边想边说出声', B: '在心中思考问题不善于表露'},
        {A: '易于“读”和了解；随意地分享个人信息', B: '相对封闭，更愿意在经过挑选的小群体中分享个人信息'},
        {A: '说的比听的多', B: '听的比说的多'},
        {A: '倾向于更频繁的互动，热情地社交', B: '倾向于更重大的互动，不把热情表现出来'},
        {A: '关注人和事物', B: '关注概念和想法'},
        {A: '探寻知识和影响的广度', B: '探寻知识和影响的深度'},
        {A: '通过与他人对话和互动学习，处理新信息', B: '在内心探索想法和概念时，处理信息'}
      ]
    },
    {
      type: 'getinfo',
      title: '根据个人收集信息方式的不同，分为观察与直觉两种类型（S-N）',
      choice: [
        {A: '更相信当下五官可感受到的有形的信息', B: '倾向于相信“第六感觉”、可以与其他信息相关联的信息'},
        {A: '在建立了具体的体验后进行抽象', B: '自然地进行模式识别'},
        {A: '关注当下所发生的', B: '对未来的可能性更感兴趣'},
        {A: '喜欢使用和琢磨已知的技能', B: '喜欢学习新技能，但掌握之后很容易感到厌倦'},
        {A: '喜欢查找细节和事实', B: '观点比仔细观察更有价值'},
        {A: '循序渐进地讲述有关情况', B: '跳跃性地展示事实，以一种绕圈子的方式'},
        {A: '意义存在于数据里', B: '意义存在于数据所显示出的理论和原理中'},
        {A: '习惯按照规则、手册办事', B: '习惯尝试，跟着感觉走'}
      ]
    },
    {
      type: 'makedecision',
      title: '根据个人做决定方式的不同，分为思维与感觉两种类型（T-F）',
      choice: [
        {A: '注重依据客观事实的分析', B: '关注决策可能给他人带来的情绪体验'},
        {A: '衡量决策时关注合理、符合逻辑、有因果的、一视同仁、符合给定的规则', B: '决策时追求形势在达到广泛共识与实现最大和谐之间的平衡；重视准则的例外性'},
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
        {A: '做了决定后感到快乐', B: '当各种选择都存在时感到快乐'},
        {A: '有“工作原则”：先工作再玩（如果有时间的话）', B: '“玩的原则”：先玩再完成工作（如果有时间的话）'},
        {A: '建立目标，并准时地完成', B: '随着新信息的获取，不断改变目标'},
        {A: '愿意知道他们将面对的情况', B: '喜欢适应新情况'},
        {A: '着重结果（重点在于完成任务）', B: '着重过程（重点在于如何完成工作）'},
        {A: '满足感来源于完成计划', B: '满足感来源于计划的开始'},
        {A: '把时间看作有限的资源，认真地对待最后期限', B: '认为时间是可更新的资源，而最后期限也是有收缩的'},
        {A: '喜欢有计划、有条理的世界，更愿意以比较有序的方式生活', B: '喜欢变化，更愿意以比较灵活、随意、开放的方式生活'},
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
    alert('好像还有条目没有选择哎～'); // error message
  } else {
    mindpower = drawchart(account('mindpower')) ? 'E' : 'I';
    getinfo = drawchart(account('getinfo')) ? 'S' : 'N';
    makedecision = drawchart(account('makedecision')) ? 'T' : 'F';
    lifestyle = drawchart(account('lifestyle')) ? 'J' : 'P';

    document.querySelector('#result output').innerHTML = mindpower + getinfo + makedecision + lifestyle;
    document.querySelector('[type="submit"]').disabled = true;
    document.getElementById('result').style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
  }
});

})()
