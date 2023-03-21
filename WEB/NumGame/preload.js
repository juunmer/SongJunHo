const _preloaded_data = [];

function preload() { //메인함수에서 호출되어야 하는 함수. 모든 이미지를 미리 다운받아 화면전환이 빠르게 만드려면 이 함수를 호출.
  const data_list = get_data_list();
  for(url of data_list) {
    preloadimg(url);
  }
}

//helper 함수 정의
function get_data_list() {
  const demo_data_list = [1,2,3,4,5,6,7,8,9,10,11,12,"back"].map(ele => {
    const root = "img/num (";
    let url = root + ele + ").svg";
    return url;
  });
  return demo_data_list;
}

function preloadimg(imgurl) {
  const temp_img = new Image();
  temp_img.src = imgurl;
  _preloaded_data.push(temp_img);
}