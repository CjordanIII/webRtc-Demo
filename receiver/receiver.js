// user your ip
const webSocket = new WebSocket("ws://192.168.1.103:5000");
// when connected
webSocket.onmessage = (event) => {
  handleSignallingData(JSON.parse(event));
};

function handleSignallingData(data) {
  switch (data.type) {
    case "offer":
      peerConn.setRemoteDescription(data.offer);
      createAndSendOffer();
      break;
    case "candidate":
      peerConn.addIceCandidate(data.candidate);
  }
}

function createAndSendOffer() {
  peerConn.createAnswer(
    (answer) => {
      peerConn.setLocalDescription(answer);
      sendData({
        type: "send_answer",
        answer: answer,
      });
    },
    (error) => {
      console.log(error);
    }
  );
}

function sendData(data) {
  //creates new user key:value
  data.username = username;
  webSocket.send(JSON.stringify(data));
}
//global var
let localStream;
let peerConn;
let username;
// inside startcall
function joinCall() {
  //send to
  username = document.getElementById("username-input").value;
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
        aspectRatio: 1.333,
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
              "stun:stun.l.google.com:19302",
              "stun:stun1.l.google.com:19302",
              "stun:stun2.l.google.com:19302",
              "stun:stun3.l.google.com:19302",
              "stun:stun4.l.google.com:19302",
              "stun:stun.ekiga.net",
              "stun:stun.ideasip.com",
              "stun:stun.rixtelecom.se",
              "stun:stun.schlund.de",
              "stun:stun.stunprotocol.org:3478",
              "stun:stun.voiparound.com",
              "stun:stun.voipbuster.com",
              "stun:stun.voipstunt.com",
              "stun:stun.voxgratia.org",
              "stun:23.21.150.121:3478",
              "stun:iphone-stun.strato-iphone.de:3478",
              "stun:numb.viagenie.ca:3478",
              "stun:s1.taraba.net:3478",
              "stun:s2.taraba.net:3478",
              "stun:stun.12connect.com:3478",
              "stun:stun.12voip.com:3478",
              "stun:stun.1und1.de:3478",
              "stun:stun.2talk.co.nz:3478",
              "stun:stun.2talk.com:3478",
              "stun:stun.3clogic.com:3478",
              "stun:stun.3cx.com:3478",
              "stun:stun.a-mm.tv:3478",
              "stun:stun.aa.net.uk:3478",
              "stun:stun.acrobits.cz:3478",
              "stun:stun.actionvoip.com:3478",
              "stun:stun.advfn.com:3478",
              "stun:stun.aeta-audio.com:3478",
              "stun:stun.aeta.com:3478",
              "stun:stun.alltel.com.au:3478",
              "stun:stun.altar.com.pl:3478",
              "stun:stun.annatel.net:3478",
              "stun:stun.antisip.com:3478",
              "stun:stun.arbuz.ru:3478",
              "stun:stun.avigora.com:3478",
              "stun:stun.avigora.fr:3478",
              "stun:stun.awa-shima.com:3478",
              "stun:stun.awt.be:3478",
              "stun:stun.b2b2c.ca:3478",
              "stun:stun.bahnhof.net:3478",
              "stun:stun.barracuda.com:3478",
              "stun:stun.bluesip.net:3478",
              "stun:stun.bmwgs.cz:3478",
              "stun:stun.botonakis.com:3478",
              "stun:stun.budgetphone.nl:3478",
              "stun:stun.budgetsip.com:3478",
              "stun:stun.cablenet-as.net:3478",
              "stun:stun.callromania.ro:3478",
              "stun:stun.callwithus.com:3478",
              "stun:stun.cbsys.net:3478",
              "stun:stun.chathelp.ru:3478",
              "stun:stun.cheapvoip.com:3478",
              "stun:stun.ciktel.com:3478",
              "stun:stun.cloopen.com:3478",
              "stun:stun.colouredlines.com.au:3478",
              "stun:stun.comfi.com:3478",
              "stun:stun.commpeak.com:3478",
              "stun:stun.comtube.com:3478",
              "stun:stun.comtube.ru:3478",
              "stun:stun.cope.es:3478",
              "stun:stun.counterpath.com:3478",
              "stun:stun.counterpath.net:3478",
              "stun:stun.cryptonit.net:3478",
              "stun:stun.darioflaccovio.it:3478",
              "stun:stun.datamanagement.it:3478",
              "stun:stun.dcalling.de:3478",
              "stun:stun.decanet.fr:3478",
              "stun:stun.demos.ru:3478",
              "stun:stun.develz.org:3478",
              "stun:stun.dingaling.ca:3478",
              "stun:stun.doublerobotics.com:3478",
              "stun:stun.drogon.net:3478",
              "stun:stun.duocom.es:3478",
              "stun:stun.dus.net:3478",
              "stun:stun.e-fon.ch:3478",
              "stun:stun.easybell.de:3478",
              "stun:stun.easycall.pl:3478",
              "stun:stun.easyvoip.com:3478",
              "stun:stun.efficace-factory.com:3478",
              "stun:stun.einsundeins.com:3478",
              "stun:stun.einsundeins.de:3478",
              "stun:stun.ekiga.net:3478",
              "stun:stun.epygi.com:3478",
              "stun:stun.etoilediese.fr:3478",
              "stun:stun.eyeball.com:3478",
              "stun:stun.faktortel.com.au:3478",
              "stun:stun.freecall.com:3478",
              "stun:stun.freeswitch.org:3478",
              "stun:stun.freevoipdeal.com:3478",
              "stun:stun.fuzemeeting.com:3478",
              "stun:stun.gmx.de:3478",
              "stun:stun.gmx.net:3478",
              "stun:stun.gradwell.com:3478",
              "stun:stun.halonet.pl:3478",
              "stun:stun.hellonanu.com:3478",
              "stun:stun.hoiio.com:3478",
              "stun:stun.hosteurope.de:3478",
              "stun:stun.ideasip.com:3478",
              "stun:stun.imesh.com:3478",
              "stun:stun.infra.net:3478",
              "stun:stun.internetcalls.com:3478",
              "stun:stun.intervoip.com:3478",
              "stun:stun.ipcomms.net:3478",
              "stun:stun.ipfire.org:3478",
              "stun:stun.ippi.fr",
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
         addEventListener("onconnectionstatechange", (e) => {
           // if null return from server
           if (e.candidate == null) {
             return;
           }
           sendData({
             type: "send_candidate",
             candidate: e.candidate,
           });
         });

      sendData({
        type: "join_call",
      });
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
