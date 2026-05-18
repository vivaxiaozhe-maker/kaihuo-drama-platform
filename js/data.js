window.MOCK = {
  user: null,
  currentCompany: '晓月传媒',

  companyList: ['晓月传媒', '星辰影视', '极光文化', '烈焰工作室', '云端影业', '星河制作'],
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
  }
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
