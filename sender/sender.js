

// user your ip
const webSocket = new WebSocket("ws://127.0.0.1:5000");

// when connected
webSocket.onmessage = (event) => {
  handleSignallingData(JSON.parse(event));
};

function handleSignallingData(data) {
  switch (data.type) {
    case "answer":
      peerConn.setRemoteDescription(data.answer);
      break;
    case "candidate":
      peerConn.addIceCandidate(data.candidate);
  }
}

//global var
let username;
// inside sendUsername
function sendUsername() {
  username = document.getElementById("username-input").value;
  //payload key:value type/what to do
  sendData({
    type: "store_user",
  });
}

function sendData(data) {
  //creates new user key:value
  data.username = username;
  webSocket.send(JSON.stringify(data));
}
//global var
let localStream;
let peerConn;
// inside startcall
function startCall() {
  document.getElementById("view-call-div").style.display = "inline";
  // video data
  navigator.getUserMedia(
    {
      video: {
        frameRate: 24,
        width: {
          min: 480,
          ideal: 720,
          max: 1280,
        },
        aspectRatio: 1.33333,
      },
      audio: true,
    },
    (stream) => {
      // needs to be availbe to send off
      localStream = stream;
      document.getElementById("local-video").srcObject = stream;
      //Create peer connection
      // pass some configurations
      //server its going to use
      let configuration = {
        iceServers: [
          {
            "urls": [
              "stun.l.google.com:19302",
"stun1.l.google.com:19302",
"stun2.l.google.com:19302",
"stun3.l.google.com:19302",
"stun4.l.google.com:19302",
"stun.ekiga.net",
"stun.ideasip.com",
"stun.rixtelecom.se",
"stun.schlund.de",
"stun.stunprotocol.org:3478",
"stun.voiparound.com",
"stun.voipbuster.com",
"stun.voipstunt.com",
"stun.voxgratia.org",
"23.21.150.121:3478",
"iphone-stun.strato-iphone.de:3478",
"numb.viagenie.ca:3478",
"s1.taraba.net:3478",
"s2.taraba.net:3478",
"stun.12connect.com:3478",
"stun.12voip.com:3478",
"stun.1und1.de:3478",
"stun.2talk.co.nz:3478",
"stun.2talk.com:3478",
"stun.3clogic.com:3478",
"stun.3cx.com:3478",
"stun.a-mm.tv:3478",
"stun.aa.net.uk:3478",
"stun.acrobits.cz:3478",
"stun.actionvoip.com:3478",
"stun.advfn.com:3478",
"stun.aeta-audio.com:3478",
"stun.aeta.com:3478",
"stun.alltel.com.au:3478",
"stun.altar.com.pl:3478",
"stun.annatel.net:3478",
"stun.antisip.com:3478",
"stun.arbuz.ru:3478",
"stun.avigora.com:3478",
"stun.avigora.fr:3478",
"stun.awa-shima.com:3478",
"stun.awt.be:3478",
"stun.b2b2c.ca:3478",
"stun.bahnhof.net:3478",
"stun.barracuda.com:3478",
"stun.bluesip.net:3478",
"stun.bmwgs.cz:3478",
"stun.botonakis.com:3478",
"stun.budgetphone.nl:3478",
"stun.budgetsip.com:3478",
"stun.cablenet-as.net:3478",
"stun.callromania.ro:3478",
"stun.callwithus.com:3478",
"stun.cbsys.net:3478",
"stun.chathelp.ru:3478",
"stun.cheapvoip.com:3478",
"stun.ciktel.com:3478",
"stun.cloopen.com:3478",
"stun.colouredlines.com.au:3478",
"stun.comfi.com:3478",
"stun.commpeak.com:3478",
"stun.comtube.com:3478",
"stun.comtube.ru:3478",
"stun.cope.es:3478",
"stun.counterpath.com:3478",
"stun.counterpath.net:3478",
"stun.cryptonit.net:3478",
"stun.darioflaccovio.it:3478",
"stun.datamanagement.it:3478",
"stun.dcalling.de:3478",
"stun.decanet.fr:3478",
"stun.demos.ru:3478",
"stun.develz.org:3478",
"stun.dingaling.ca:3478",
"stun.doublerobotics.com:3478",
"stun.drogon.net:3478",
"stun.duocom.es:3478",
"stun.dus.net:3478",
"stun.e-fon.ch:3478",
"stun.easybell.de:3478",
"stun.easycall.pl:3478",
"stun.easyvoip.com:3478",
"stun.efficace-factory.com:3478",
"stun.einsundeins.com:3478",
"stun.einsundeins.de:3478",
"stun.ekiga.net:3478",
"stun.epygi.com:3478",
"stun.etoilediese.fr:3478",
"stun.eyeball.com:3478",
"stun.faktortel.com.au:3478",
"stun.freecall.com:3478",
"stun.freeswitch.org:3478",
"stun.freevoipdeal.com:3478",
"stun.fuzemeeting.com:3478",
"stun.gmx.de:3478",
"stun.gmx.net:3478",
"stun.gradwell.com:3478",
"stun.halonet.pl:3478",
"stun.hellonanu.com:3478",
"stun.hoiio.com:3478",
"stun.hosteurope.de:3478",
"stun.ideasip.com:3478",
"stun.imesh.com:3478",
"stun.infra.net:3478",
"stun.internetcalls.com:3478",
"stun.intervoip.com:3478",
"stun.ipcomms.net:3478",
"stun.ipfire.org:3478",
"stun.ippi.fr:3478",
"stun.ipshka.com:3478",
"stun.iptel.org:3478",
"stun.irian.at:3478",
"stun.it1.hr:3478",
"stun.ivao.aero:3478",
"stun.jappix.com:3478",
"stun.jumblo.com:3478",
"stun.justvoip.com:3478",
"stun.kanet.ru:3478",
"stun.kiwilink.co.nz:3478",
"stun.kundenserver.de:3478",
"stun.l.google.com:19302",
"stun.linea7.net:3478",
"stun.linphone.org:3478",
"stun.liveo.fr:3478",
"stun.lowratevoip.com:3478",
"stun.lugosoft.com:3478",
"stun.lundimatin.fr:3478",
"stun.magnet.ie:3478",
"stun.manle.com:3478",
"stun.mgn.ru:3478",
"stun.mit.de:3478",
"stun.mitake.com.tw:3478",
"stun.miwifi.com:3478",
"stun.modulus.gr:3478",
"stun.mozcom.com:3478",
"stun.myvoiptraffic.com:3478",
"stun.mywatson.it:3478",
"stun.nas.net:3478",
"stun.neotel.co.za:3478",
"stun.net"
            ],
          },
        ],
      };
      // takes in arry of stun servers the more the better
      peerConn = new RTCPeerConnection(configuration);
      peerConn.addStream(localStream);

      peerConn.onaddstream = (e) => {
        // Showing the remote stream
        document.getElementById("remote-video").srcObject = e.stream;
      };
      // send to server - to the people that is trying to connect
      peerConn.onconnectionstatechange((e) => {
        // if null return from server
        if (e.candidate == null) {
          return;
        }
        sendData({
          type: "store_candidate",
          candidate: e.candidate,
        });
      });
      createAndSendOffer();
    },
    (error) => {
      console.log(error);
    }
  );
}
// createing offer (video, audio ect..)
function createAndSendOffer() {
  // gathers the ice canadets
  peerConn.createOffer(
    (offer) => {
      sendData({
        type: "store_offer",
        offer: offer,
      });
      // Describing what I'm sending
      peerConn.setLocalDescription(offer);
    },
    (error) => {
      console.log(error);
    }
  );
}

// Mute audio
let isAudio = true;
function muteAudio() {
  isAudio = !isAudio;
  localStream.getAudioTracks()[0].enabled = isAudio;
}

/// Mute video
let isVideo = true;
function muteVideo() {
  isVideo = !isVideo;
  localStream.getVideoTracks()[0].enabled = isVideo;
}
