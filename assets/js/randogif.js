const elem = document.getElementById('random-gif');
if (elem) {
  const hashes = [
    'vSXZHHbjJQqaWxFXHw',
    'xSlDYEXknFwY4ucrZV',
    'oEQN8leSSK4GUEv2AT',
    'WRL7YgP42OKns22wRD',
    'l4KibWpBGWchSqCRy',
    'OSOOHw7N9gb3R06OU7',
    'l1BgT1rs5YTOzvMHu',
    'TiDCLLG0VNyPbTI7Pm',
    'xThuWkj1FAYH4wmGfC',
    '9rO5Aksmn0dHQKXJAu',
    'y3csvNv5N3NWDRMt2j',
    'qxlb0qNuJKj7y',
    'xT0BKqhdlKCxCNsVTq',
    'IQF90tVlBIByw',
    'QugbOTv6EhPeXVSI2T',
    'qo4KT6CKs37z2',
    'equMguFgSfCOA',
    '26BRtW4zppWWjrsPu',
    'xAFPuHVjmsBmU',
    'l46CeXx4PaMaG54E8',
    'l0MYv4hOIO0avWWSA',
    'Y704R8kcLBMAMhyIAV',
    'kaMwwM91UCxstRfvA3',
    'MRGfqDh6IcAf2VvAxA',
    'mcJohbfGPATW8',
    'jCz1AWFI4SnRzCmj9l',
    'DXhmNiA8F1i4fLnMdb',
    '26FPpSuhgHvYo9Kyk',
    '8FBCOSYErFjmDoaxeG',
    'V7rIHfz5YKykNzEg0o',
    '3oEduGfFfNw7sWOcak',
    'VFjeh3RaALheGMmy55',
    'Blp1RD7hB4TQY',
    'XzwHirdr2ykkg0JzPx',
    '2zlro2h0kcdY1iFQ96',
    'miE543xKR6zrFgWFaR',
    'WfajkdpSVZ90AAST3w',
    'lovB2gygxMIOA',
    'cReBRwdnlW9gs',
    'iw2qgqcPetYis'
  ];

  const randomIndex = Math.floor(Math.random() * hashes.length);
  const url = `https://media0.giphy.com/media/${hashes[randomIndex]}/200w.gif`;

  elem.src = url;
  // Set the content to be inline block
  document.getElementById('about-content').style = 'display:inline-block;';
}
