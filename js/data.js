window.MOCK = {
  user: null,
  currentCompany: '晓月传媒',

  companyList: ['晓月传媒', '星辰影视', '极光文化', '烈焰工作室', '云端影业', '星河制作'],

  dramas: [
    { id: 'd1', name: '谁抢机缘谁赢麻，我竟是隐藏BOSS', videoUrl: 'https://example.com/video1', type: 'AI剧', copyrightType: '定制剧', company: '晓月传媒', highlightDescription: '卡1：第11集，卡2：第25集', timeliness: 'T-7', status: '已完成', auditResult: 'S级', submitterId: 'u1', submitterName: '张三', createdAt: '2026-05-10 09:30:00', updatedAt: '2026-05-12 14:20:00',
      auditHistory: [
        { time: '2026-05-11 10:00:00', result: 'A+级', comment: '剧情节奏紧凑，角色塑造立体，但部分特效还有提升空间。' },
        { time: '2026-05-12 14:20:00', result: 'S级', comment: '经二次复核，整体制作水准达到平台S级标准，推荐重点推广。' }
      ]
    },
    { id: 'd2', name: '重生之我在娱乐圈当顶流', videoUrl: 'https://example.com/video2', type: '真人', copyrightType: '成品剧', company: '星辰影视', highlightDescription: '', timeliness: 'T-15', status: '待审核', auditResult: null, submitterId: 'u1', submitterName: '张三', createdAt: '2026-05-15 16:45:00', updatedAt: '2026-05-15 16:45:00' },
    { id: 'd3', name: '修仙归来：开局无敌', videoUrl: 'https://example.com/video3', type: 'AI剧', copyrightType: '定制剧', company: '极光文化', highlightDescription: '卡1：第5集', timeliness: 'T-30', status: '审核中', auditResult: null, submitterId: 'u1', submitterName: '张三', createdAt: '2026-05-14 11:20:00', updatedAt: '2026-05-16 09:00:00' },
    { id: 'd4', name: '闪婚总裁太会撩', videoUrl: 'https://example.com/video4', type: '真人', copyrightType: '成品剧', company: '烈焰工作室', highlightDescription: '', timeliness: 'T-7', status: '已完成', auditResult: 'A+级', submitterId: 'u1', submitterName: '张三', createdAt: '2026-05-08 13:10:00', updatedAt: '2026-05-11 10:30:00',
      auditHistory: [
        { time: '2026-05-11 10:30:00', result: 'A+级', comment: '演员演技在线，剧本逻辑通顺，适合女性向用户群体。' }
      ]
    },
    { id: 'd5', name: '系统让我当反派', videoUrl: 'https://example.com/video5', type: 'AI剧', copyrightType: '定制剧', company: '云端影业', highlightDescription: '卡1：第8集，卡2：第18集', timeliness: 'T-15', status: '已完成', auditResult: 'A级', submitterId: 'u1', submitterName: '张三', createdAt: '2026-05-05 08:50:00', updatedAt: '2026-05-09 15:40:00',
      auditHistory: [
        { time: '2026-05-09 15:40:00', result: 'A级', comment: '创意不错，反派逆袭设定有看点，但后期制作略显粗糙。' }
      ]
    },
    { id: 'd6', name: '落魄千金逆袭记', videoUrl: 'https://example.com/video6', type: '真人', copyrightType: '成品剧', company: '星河制作', highlightDescription: '', timeliness: 'T-30', status: '已完成', auditResult: 'B级', submitterId: 'u1', submitterName: '张三', createdAt: '2026-05-01 17:25:00', updatedAt: '2026-05-06 11:15:00',
      auditHistory: [
        { time: '2026-05-06 11:15:00', result: 'B级', comment: '套路化严重，制作成本偏低，可作为常规内容填充。' }
      ]
    },
    { id: 'd7', name: '我在异世界开超市', videoUrl: 'https://example.com/video7', type: 'AI剧', copyrightType: '定制剧', company: '晓月传媒', highlightDescription: '', timeliness: 'T-7', status: '待审核', auditResult: null, submitterId: 'u1', submitterName: '张三', createdAt: '2026-05-17 10:00:00', updatedAt: '2026-05-17 10:00:00' },
    { id: 'd8', name: '替身娇妻要逃婚', videoUrl: 'https://example.com/video8', type: '真人', copyrightType: '成品剧', company: '星辰影视', highlightDescription: '', timeliness: 'T-15', status: '已完成', auditResult: '不通过', submitterId: 'u1', submitterName: '张三', createdAt: '2026-04-28 09:40:00', updatedAt: '2026-05-03 16:20:00',
      auditHistory: [
        { time: '2026-05-03 16:20:00', result: '不通过', comment: '内容涉及敏感题材，且制作质量未达平台最低标准，建议重新调整后再提报。' }
      ]
    }
  ],

  materials: {
    d1: [
      { id: 'm1', dramaId: 'd1', name: '海报_9_16.jpg', type: '图片', size: 2048000, createdAt: '2026-05-10 10:00:00' },
      { id: 'm2', dramaId: 'd1', name: '预告片_高光.mp4', type: '视频', size: 15728640, createdAt: '2026-05-10 10:30:00' }
    ]
  },

  episodes: {
    d1: [
      { id: 'e1', dramaId: 'd1', episodeNumber: 1, title: '第一集', fileName: '1_第一集.mp4', fileSize: 52428800, createdAt: '2026-05-10 12:00:00' },
      { id: 'e2', dramaId: 'd1', episodeNumber: 2, title: '第二集', fileName: '2_第二集.mp4', fileSize: 49807360, createdAt: '2026-05-10 12:05:00' }
    ]
  },

  login: function(username, password, role) {
    this.user = {
      id: role === 'auditor' ? 'u2' : 'u1',
      username: username,
      displayName: role === 'auditor' ? '李审核' : '晓月',
      role: role
    };
    localStorage.setItem('kaihuo_user', JSON.stringify(this.user));
    return this.user;
  },

  getUser: function() {
    const data = localStorage.getItem('kaihuo_user');
    if (data) {
      try { this.user = JSON.parse(data); } catch(e) {}
    }
    return this.user;
  },

  logout: function() {
    this.user = null;
    localStorage.removeItem('kaihuo_user');
  },

  onboardingApplications: [
    {
      id: 'KH20260518001',
      companyName: '北京晓月文化传媒有限公司',
      unifiedSocialCode: '91110105MABXW0EJ6B',
      businessLicenseUrl: '#',
      companyType: '文化传媒公司',
      establishedAt: '2020-03-15',
      registeredAddress: '北京市朝阳区',
      officeAddress: '北京市朝阳区望京SOHO',
      contactPerson: { name: '张小明', phone: '13800138001', email: 'zhangxm@xiaoyue.com', position: '商务总监' },
      legalRepresentative: { name: '李晓月', phone: '13900139001', idCard: '110101199001011234', email: 'lixy@xiaoyue.com' },
      businessTypes: ['成品短剧', 'AI短剧'],
      contentTypePreference: ['真人实拍', 'AI生成'],
      genderPreference: '不限',
      genreSpecialty: ['逆袭', '都市', '甜宠'],
      hasBroadcastLicense: true,
      broadcastLicenseNo: '(京)字第01234号',
      broadcastLicenseExpireAt: '2027-06-30',
      hasNetCultureLicense: true,
      otherQualifications: '拥有ICP经营许可证',
      hasPreviousWorks: true,
      previousWorks: [
        { name: '逆袭之我是总裁', platform: '抖音', episodes: 80, type: '真人', link: '' },
        { name: '修仙归来', platform: '快手', episodes: 100, type: '真人', link: '' }
      ],
      status: 'approved',
      auditResult: 'approved',
      auditOpinion: '资质齐全，作品质量较高，审核通过',
      reviewerId: 'u2',
      reviewedAt: '2026-05-18 16:30:00',
      createdAt: '2026-05-18 10:23:15',
      updatedAt: '2026-05-18 16:30:00',
      accountGenerated: true,
      accountUsername: '91110105MABXW0EJ6B'
    },
    {
      id: 'KH20260518002',
      companyName: '星辰影视制作有限公司',
      unifiedSocialCode: '91310115MA1K3LNP8E',
      businessLicenseUrl: '#',
      companyType: '影视制作公司',
      establishedAt: '2019-08-20',
      registeredAddress: '上海市浦东新区',
      officeAddress: '上海市浦东新区张江高科',
      contactPerson: { name: '王星辰', phone: '13800138002', email: 'wangxc@xingchen.com', position: '内容总监' },
      legalRepresentative: { name: '赵星辰', phone: '13900139002', idCard: '310115198502023456', email: 'zhaoxc@xingchen.com' },
      businessTypes: ['定制短剧', '成品短剧'],
      contentTypePreference: ['真人实拍'],
      genderPreference: '女频',
      genreSpecialty: ['甜宠', '古装', '都市'],
      hasBroadcastLicense: true,
      broadcastLicenseNo: '(沪)字第05678号',
      broadcastLicenseExpireAt: '2028-12-31',
      hasNetCultureLicense: false,
      otherQualifications: '',
      hasPreviousWorks: true,
      previousWorks: [
        { name: '霸道总裁爱上我', platform: '微信小程序', episodes: 90, type: '真人', link: '' }
      ],
      status: 'approved',
      auditResult: 'approved',
      auditOpinion: '制作能力强，过往作品数据好，审核通过',
      reviewerId: 'u2',
      reviewedAt: '2026-05-17 14:20:00',
      createdAt: '2026-05-17 09:00:00',
      updatedAt: '2026-05-17 14:20:00',
      accountGenerated: true,
      accountUsername: '91310115MA1K3LNP8E'
    },
    {
      id: 'KH20260518003',
      companyName: '极光文化传媒工作室',
      unifiedSocialCode: '92440101MA5D8XQY2N',
      businessLicenseUrl: '#',
      companyType: '个人工作室',
      establishedAt: '2023-01-10',
      registeredAddress: '广州市天河区',
      officeAddress: '',
      contactPerson: { name: '刘极光', phone: '13800138003', email: 'liujg@jiguang.com', position: '创始人' },
      legalRepresentative: { name: '刘极光', phone: '13900139003', idCard: '440106199508154567', email: '' },
      businessTypes: ['AI短剧'],
      contentTypePreference: ['AI生成'],
      genderPreference: '男频',
      genreSpecialty: ['异能', '修仙'],
      hasBroadcastLicense: false,
      hasNetCultureLicense: false,
      otherQualifications: '',
      hasPreviousWorks: false,
      previousWorks: [],
      status: 'pending',
      createdAt: '2026-05-18 08:15:00',
      updatedAt: '2026-05-18 08:15:00'
    },
    {
      id: 'KH20260518004',
      companyName: '烈焰数字科技有限公司',
      unifiedSocialCode: '91440300MA5G8HJN3L',
      businessLicenseUrl: '#',
      companyType: '文化传媒公司',
      establishedAt: '2021-06-18',
      registeredAddress: '深圳市南山区',
      officeAddress: '深圳市南山区科技园',
      contactPerson: { name: '陈烈焰', phone: '13800138004', email: 'chenly@lieyan.com', position: '制片人' },
      legalRepresentative: { name: '周烈焰', phone: '13900139004', idCard: '440305198810206789', email: 'zhouly@lieyan.com' },
      businessTypes: ['成品短剧', '定制短剧', '动漫短剧'],
      contentTypePreference: ['真人实拍', '动画'],
      genderPreference: '不限',
      genreSpecialty: ['逆袭', '喜剧', '悬疑'],
      hasBroadcastLicense: true,
      broadcastLicenseNo: '(粤)字第09876号',
      broadcastLicenseExpireAt: '2026-11-30',
      hasNetCultureLicense: true,
      otherQualifications: '拥有网络视听节目许可证',
      hasPreviousWorks: true,
      previousWorks: [
        { name: '都市奇侠传', platform: '抖音', episodes: 60, type: '真人', link: '' },
        { name: '鬼吹灯外传', platform: '快手', episodes: 45, type: '真人', link: '' },
        { name: '萌宠大作战', platform: 'B站', episodes: 24, type: '动漫', link: '' }
      ],
      status: 'reviewing',
      createdAt: '2026-05-16 14:30:00',
      updatedAt: '2026-05-18 11:00:00'
    },
    {
      id: 'KH20260518005',
      companyName: '云端影业集团有限公司',
      unifiedSocialCode: '91500105MA606UTB4M',
      businessLicenseUrl: '#',
      companyType: '影视制作公司',
      establishedAt: '2018-12-05',
      registeredAddress: '重庆市渝中区',
      officeAddress: '重庆市渝中区解放碑',
      contactPerson: { name: '杨云端', phone: '13800138005', email: 'yangyd@yunduan.com', position: '总经理' },
      legalRepresentative: { name: '吴云端', phone: '13900139005', idCard: '500103198002038901', email: 'wuyd@yunduan.com' },
      businessTypes: ['成品短剧', '定制短剧'],
      contentTypePreference: ['真人实拍'],
      genderPreference: '女频',
      genreSpecialty: ['甜宠', '古装'],
      hasBroadcastLicense: true,
      broadcastLicenseNo: '(渝)字第04567号',
      broadcastLicenseExpireAt: '2029-03-31',
      hasNetCultureLicense: false,
      otherQualifications: '',
      hasPreviousWorks: true,
      previousWorks: [
        { name: '王妃升职记', platform: '微信小程序', episodes: 100, type: '真人', link: '' }
      ],
      status: 'approved',
      auditResult: 'approved',
      auditOpinion: '大型影视公司，资质完善，审核通过',
      reviewerId: 'u2',
      reviewedAt: '2026-05-15 10:00:00',
      createdAt: '2026-05-14 16:45:00',
      updatedAt: '2026-05-15 10:00:00',
      accountGenerated: true,
      accountUsername: '91500105MA606UTB4M'
    },
    {
      id: 'KH20260518006',
      companyName: '星河MCN机构',
      unifiedSocialCode: '92340103MA2T6B2K1R',
      businessLicenseUrl: '#',
      companyType: 'MCN机构',
      establishedAt: '2022-09-01',
      registeredAddress: '杭州市西湖区',
      officeAddress: '杭州市西湖区西溪湿地',
      contactPerson: { name: '林星河', phone: '13800138006', email: 'linxh@xinghe.com', position: '运营总监' },
      legalRepresentative: { name: '黄星河', phone: '13900139006', idCard: '330106199210104321', email: '' },
      businessTypes: ['AI短剧', '动漫短剧'],
      contentTypePreference: ['AI生成', '动画'],
      genderPreference: '不限',
      genreSpecialty: ['喜剧', '都市'],
      hasBroadcastLicense: false,
      hasNetCultureLicense: false,
      otherQualifications: '与多个AI工具平台有合作协议',
      hasPreviousWorks: true,
      previousWorks: [
        { name: 'AI修仙传', platform: '抖音', episodes: 50, type: 'AI剧', link: '' }
      ],
      status: 'rejected',
      auditResult: 'rejected',
      auditOpinion: '资质不全，缺少广播电视节目制作经营许可证',
      rejectReason: '资质不全',
      reviewerId: 'u2',
      reviewedAt: '2026-05-17 15:30:00',
      createdAt: '2026-05-15 11:20:00',
      updatedAt: '2026-05-17 15:30:00'
    },
    {
      id: 'KH20260518007',
      companyName: '幻影动画工作室',
      unifiedSocialCode: '92440300MA5H7KLP3W',
      businessLicenseUrl: '#',
      companyType: '个人工作室',
      establishedAt: '2024-02-14',
      registeredAddress: '深圳市福田区',
      officeAddress: '',
      contactPerson: { name: '周幻影', phone: '13800138007', email: 'zhouhy@huanying.com', position: '导演' },
      legalRepresentative: { name: '周幻影', phone: '13900139007', idCard: '440304199512258765', email: '' },
      businessTypes: ['动漫短剧'],
      contentTypePreference: ['动画'],
      genderPreference: '不限',
      genreSpecialty: ['喜剧', '异能'],
      hasBroadcastLicense: false,
      hasNetCultureLicense: true,
      otherQualifications: '',
      hasPreviousWorks: false,
      previousWorks: [],
      status: 'pending',
      createdAt: '2026-05-18 16:00:00',
      updatedAt: '2026-05-18 16:00:00'
    }
  ]
};

window.utils = {
  formatSize: function(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  },

  getParam: function(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  },

  statusColor: function(status) {
    const map = { '待审核': '#1890ff', '审核中': '#faad14', '已完成': '#52c41a' };
    return map[status] || '#8c8c8c';
  },

  resultColor: function(result) {
    const map = { 'S级': '#faad14', 'A+级': '#52c41a', 'A级': '#95de64', 'B级': '#ffe58f', '不通过': '#ff4d4f' };
    return map[result] || '#8c8c8c';
  }
};
