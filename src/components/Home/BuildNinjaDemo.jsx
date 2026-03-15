'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import s from './BuildNinjaDemo.module.css';
import {
  BUILDS, SUCCESS_CONFIGS, TOP5_CONFIGS, AGENT_TREEMAP,
  AGENTS, SIDEBAR_TREE, PROJECT,
  QUEUE_STATS, QUEUE_ITEMS, TRIGGERS,
  USERS_STATS, USERS_PENDING, SSO_PROVIDERS, LICENSE, SETTINGS_TABS
} from './data';
import Image from 'next/image';

/* ─── Icons ─── */
const Ic = {
  Dash: () => <svg fill="currentColor" viewBox="0 0 16 16" w="16" h="16" style={{ width: 20, height: 20 }}><path d="M12.229 1.5c.305 0 .595.063.871.189.275.12.515.285.718.493.208.203.372.443.493.718.126.276.189.566.189.871v8.459c0 .305-.063.595-.189.871-.12.276-.285.517-.493.725-.203.203-.443.368-.718.493-.276.121-.566.181-.871.181H3.771c-.305 0-.595-.06-.871-.181-.276-.126-.517-.29-.725-.493-.203-.208-.368-.45-.493-.725-.121-.276-.181-.566-.181-.871V3.771c0-.305.06-.595.181-.871.126-.276.29-.515.493-.718.208-.208.45-.372.725-.493.276-.126.566-.189.871-.189h8.458ZM3.821 2.429c-.189 0-.368.036-.537.109-.169.072-.319.174-.45.305-.126.126-.225.273-.297.443-.073.169-.109.348-.109.537v6.036h6.5V2.429H3.821ZM13.571 3.821c0-.189-.036-.368-.109-.537-.073-.169-.174-.317-.305-.443-.126-.13-.273-.232-.443-.305-.169-.073-.348-.109-.537-.109h-2.32v2.786h3.714V3.821ZM13.571 6.143h-3.714v3.714h3.714V6.143ZM2.429 12.179c0 .188.036.368.109.537.072.169.171.319.297.45.13.126.281.225.45.297.169.073.348.109.537.109h2.32v-2.786H2.429v1.393ZM12.179 13.571c.188 0 .368-.036.537-.109.169-.073.317-.171.442-.297.131-.13.232-.281.305-.45.073-.169.109-.348.109-.537v-1.393h-6.5v2.786h5.107Z" /></svg>,
  Proj: () => <svg fill="currentColor" viewBox="0 0 16 16" style={{ width: 20, height: 20 }}><path d="M13.333 8H9.334c-.367 0-.667.3-.667.667v4.666c0 .367.3.667.667.667h4c.366 0 .666-.3.666-.667V8.667C14 8.3 13.7 8 13.333 8zm-.256 5.077H9.59V9.23h3.487v3.847zM6.667 2H2.667C2.3 2 2 2.3 2 2.667v5.333c0 .366.3.666.667.666h4c.366 0 .666-.3.666-.666V2.667C7.333 2.3 7.033 2 6.667 2zm-.257 5.744H3.18V2.923h3.23v4.82zM6.667 10H2.667C2.3 10 2 10.3 2 10.667v2.666c0 .367.3.667.667.667h4c.366 0 .666-.3.666-.667V10.667C7.333 10.3 7.033 10 6.667 10zm-.257 3.077H3.18v-2.154h3.23v2.154zM13.333 2H9.334C8.967 2 8.667 2.3 8.667 2.667v3.333c0 .367.3.667.666.667h4c.366 0 .666-.3.666-.667V2.667C14 2.3 13.7 2 13.333 2zm-.256 3.744H9.59V2.923h3.487v2.82z" /></svg>,
  Agent: () => <svg fill="currentColor" viewBox="0 0 16 16" style={{ width: 20, height: 20 }}><path d="M13.13 1.593H2.87C1.84 1.593 1 2.437 1 3.474v6.466c0 1.037.84 1.88 1.87 1.88h4.542v1.411H5.435c-.325 0-.588.263-.588.588s.263.588.588.588h5.13c.325 0 .588-.263.588-.588s-.263-.588-.588-.588H8.588v-1.411h4.542c1.031 0 1.87-.843 1.87-1.88V3.474c0-1.037-.839-1.881-1.87-1.881zm.694 8.347c0 .389-.312.705-.694.705H2.87c-.383 0-.695-.316-.695-.705V3.474c0-.389.312-.705.695-.705h10.26c.382 0 .694.316.694.705v6.466z" /></svg>,
  Queue: () => <svg width="20" height="20" viewBox="0 0 22 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" transform="scale(0.8)" aria-hidden="true" focusable="false"><path d="M6.0382 0.337981C6.21399 0.523186 6.33795 0.819077 6.35617 1.0741L6.35652 14.0024C7.52673 14.224 8.6127 14.9806 9.31531 15.9267C10.0682 16.9406 10.4158 18.2538 10.2697 19.5114C10.6443 19.4897 11.0161 19.4397 11.3809 19.3531C14.5213 18.6078 15.4 15.0881 15.648 12.2832C13.7005 12.0714 12.0154 10.6174 11.4531 8.75514C10.2912 4.90699 13.7961 1.31901 17.6696 2.36654C21.5937 3.42774 22.6892 8.50052 19.6064 11.1436C19.1057 11.5729 18.5364 11.8272 17.9488 12.1105C17.7182 15.8057 16.4525 20.0225 12.6153 21.362C11.5698 21.727 10.5121 21.8071 9.40892 21.8126C7.49334 24.5672 3.43038 24.7631 1.27914 22.1559C-1.1065 19.2646 0.429327 14.7773 4.07251 14.0024L4.07916 0.994348C4.19118 0.0570916 5.39855 -0.335916 6.0382 0.337981ZM16.1123 4.46593C13.8724 4.64082 12.7003 7.2768 14.1432 9.03371C15.6669 10.889 18.6653 10.0884 19.077 7.73162C19.3859 5.96284 17.9044 4.326 16.1123 4.46593ZM5.21452 16.1365C3.17843 16.1365 1.83452 18.2191 2.66077 20.0859C3.39218 21.7384 5.58196 22.2673 6.97948 21.1041C9.01848 19.407 7.83803 16.1365 5.21452 16.1365Z"></path></svg>,
  Trig: () => <svg fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ width: 20, height: 20 }}><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="transparent" /></svg>,
  Users: () => <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" > <path d="M11.027591 4.823981c0 1.835367-1.486929 3.324003-3.320146 3.324003-1.833281 0-3.320189-1.488635-3.320189-3.324003s1.483923-3.323981 3.320189-3.323981c1.836196 0 3.320146 1.488619 3.320146 3.323981ZM10.1229 4.823981c0-1.336167-1.080841-2.418255-2.415454-2.418255-1.334656 0-2.415503 1.082088-2.415503 2.418255s1.080847 2.418282 2.415503 2.418282c1.334613 0 2.415454-1.082109 2.415454-2.418282Z" /> <path d="M11.248537 8.156921c.2717-.04485.504563.137529.534409.409555.01495.119546-.026867.585867.011971.642633.235895.080708.477695.152479.683745.298946.062672.008938.447851-.48425.615062-.535058.388159-.113587.710613.215204.576225.600817-.053733.152425-.534408.538037-.525471.597837.143325.209246.220946.448392.298567.687484.307559.056821.776316-.104596.979334.203287.203017.307883.011916.675567-.334426.714405-.116404.01197-.591175-.023888-.641929.01197-.074641.239146-.155242.478292-.298566.687538-.008938.059746.471737.445359.525471.597838.137366.39157-.208976.729353-.594155.594803-.15822-.053787-.52845-.520108-.576224-.523088-.107522.04485-.206051.110609-.316496.155459-.068684.026867-.358312.113587-.376187.125505-.053788.038891-.011971.544049-.023887.654658-.038837.349754-.418004.5291-.713645.334805-.295588-.194297-.146305-.675567-.203018-.980471-.238875-.07475-.477695-.155459-.686725-.298892-.059692-.008993-.444871.472278-.597133.526066-.385179.134496-.713592-.188338-.600167-.576929.047775-.170355.543454-.552988.534463-.615767-.146304-.206266-.214988-.451371-.298567-.684503-.370229-.035858-1.045038.116566-1.059934-.451372-.01495-.567936.683746-.448391 1.059934-.478291.0806-.236112.152262-.478238.298567-.684504.008991-.0598-.471738-.445412-.525471-.597837-.137367-.391571.208975-.729354.594154-.594859.170192.0598.513554.517129.582238.5291.104487-.050808.203017-.116566.310483-.161416.09257-.038892.304579-.083688.361292-.1196.029846-.017929.035858-.020908.041817-.059746.059691-.325812-.161255-.929663.370229-1.01335ZM12.574213 11.325454c0-.687483-.555371-1.243504-1.242096-1.243504s-1.242096.556021-1.242096 1.243504c0 .687538.555371 1.243504 1.242096 1.243504s1.242096-.555966 1.242096-1.243504Z" /> <path d="M8.026866 9.451233c-.071662.071771-.182108.1196-.283616.131571-.304579.035858-.680767 0-1.003226.026866-1.221177.101671-3.693387.687537-4.218879 1.948971-.116442.280962-.137345 1.010371-.098529 1.315221.005969.050863.014928.0897.068673.107629l5.251962.008991c.549358.065759.55835.845921.002979.905721H2.410672c-.382177-.062779-.692696-.295967-.82407-.660616-.146302-.406522-.092559-1.503559.056729-1.92205.615067-1.736746 3.436609-2.475037 5.069821-2.606608.307515-.023888.728553-.053788 1.033077-.026867.385179.032879.555371.496167.280637.774204Z" /> </svg>,
  Cog: () => <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false"><path d="M14.483629,9.650299c-.085938-.133789-.195312-.258789-.321289-.37207-.123047-.11377-.257812-.223633-.402344-.326172-.132812-.09375-.260742-.193359-.378906-.293945-.113281-.100098-.207031-.207031-.28125-.318359-.067383-.100098-.099609-.210938-.099609-.339844,0-.131836.032227-.242676.100586-.340332.073242-.110352.165039-.215332.273438-.311035.118164-.10498.245117-.203125.375-.291504.147461-.09668.279297-.196777.404297-.306641.129883-.116211.239258-.242188.324219-.374512.092773-.14502.140625-.314453.140625-.504395,0-.098145-.021484-.213867-.066406-.354004-.041992-.130859-.098633-.27002-.166016-.407715-.0625-.144531-.139648-.29541-.226562-.447754-.085938-.154297-.172852-.299316-.258789-.435547-.085938-.136719-.170898-.261719-.250977-.372559-.083984-.123535-.151367-.212891-.210938-.280273-.100586-.115723-.214844-.205078-.335938-.263184-.258789-.140137-.615234-.129395-.9375-.006836-.154297.058594-.308594.122559-.463867.190918-.145508.066406-.291992.12793-.442383.185059-.298828.116211-.624023.117676-.854492-.079102-.125977-.107422-.203125-.239746-.233398-.403809-.040039-.21875-.078125-.435547-.114258-.649414-.036133-.21582-.074219-.433594-.114258-.654297-.041016-.213379-.131836-.391113-.269531-.527832-.137695-.138672-.31543-.229492-.527344-.269531-.185547-.036621-.37793-.062012-.573242-.076172-.373047-.026855-.74707-.02832-1.12207-.000488-.19043.009766-.37793.030762-.561523.0625-.209961.040039-.390625.129395-.540039.267578-.143555.138184-.237305.316406-.27832.53125-.040039.219727-.080078.438477-.121094.658203l-.120117.658203c-.03125.168945-.107422.303223-.232422.410156-.22168.185547-.551758.189941-.854492.073242-.146484-.057617-.291992-.119141-.43457-.184082-.150391-.072754-.301758-.13916-.452148-.198242-.295898-.118164-.631836-.138184-.926758-.003418-.125.060547-.239258.146484-.338867.255859-.063477.067871-.136719.160645-.217773.273926-.082031.113281-.167969.240723-.258789.381836-.086914.135254-.173828.279785-.265625.43457-.087891.152832-.166016.303223-.232422.445801-.072266.153809-.128906.289551-.173828.416992-.043945.135742-.066406.25293-.066406.348145,0,.185059.047852.352539.140625.49707.085938.133301.194336.26123.324219.382324.12207.10791.256836.214844.400391.316895.133789.095215.261719.196777.380859.301758.110352.095215.205078.199707.279297.310059.067383.100586.099609.211914.099609.340332,0,.132812-.032227.246582-.098633.345215-.075195.107422-.169922.212891-.282227.312988-.112305.099121-.239258.194824-.376953.285645-.143555.097656-.27832.202637-.402344.3125-.125.11084-.232422.237793-.318359.375488-.092773.144531-.139648.3125-.139648.49707,0,.100586.022461.219727.066406.353516.042969.134766.09668.275391.161119.418945.067397.141602.144545.289062.231459.444336.086914.150391.172852.291992.258789.428711.085938.134766.166016.258789.246094.375.083008.115234.154297.207031.214844.277344.100586.116211.214844.207031.341797.271484.274414.132812.617188.119141.931641-.001953.154297-.058594.307617-.12207.456055-.19043.150391-.066406.300781-.12793.450195-.185547.306641-.116211.625977-.116211.855469.080078.125977.106445.202148.238281.233398.40332.040039.213867.078125.429688.113281.649414.036133.21582.074219.431641.114258.647461.041016.211914.131836.391602.269531.535156.138672.137695.316406.228516.527344.269531.1875.036133.380845.061523.573242.075195.191406.013672.381836.020508.573242.020508.185547,0,.369141-.003906.552734-.013672.182617-.012695.370117-.036133.558594-.068359.213867-.040039.394531-.12793.540039-.261719.144531-.139648.237305-.320312.277344-.536133.022461-.118164.042969-.230469.060547-.334961l.067383-.34375c.027344-.145508.051758-.294922.074219-.446289.024414-.143555.063477-.274414.118164-.391602.049805-.110352.120117-.200195.209961-.267578.146484-.112305.458984-.138672.779297-.017578.149414.057617.299805.12207.451172.193359.154297.068359.308594.131836.462891.19043.327148.121094.652344.133789.910156.001953.125-.05957.240234-.145508.34375-.258789.05957-.069336.130859-.162109.212891-.274414.086914-.114258.173828-.240234.258789-.375977.091797-.135742.179688-.279297.264648-.426758.09082-.148438.171875-.299805.242188-.449219.069336-.147461.125-.286133.165039-.407227.050781-.139648.075195-.258789.075195-.364258,0-.182617-.046875-.349609-.141602-.498047ZM3.935777,8.759186c.115234-.239746.173814-.495117.173814-.759277,0-.262695-.05565-.515625-.166001-.750977-.110352-.239258-.268555-.446289-.46875-.613281l-.960938-.816895c.107422-.269531.235352-.527344.382812-.769531.147461-.24707.313477-.487793.493164-.716797l1.15625.427246.027344.007812c.382812.137695.84082.133301,1.21582-.008789.191406-.07666.366211-.180664.518555-.309082.15332-.129883.28418-.285156.390625-.462891.104492-.181152.179688-.379395.22168-.585938.048828-.22168.092773-.443359.128906-.665527.030273-.189453.063477-.380371.097656-.572754.124023-.015625.250977-.026855.380859-.03418.445312-.037109.897461-.021484,1.338867.044922l.212891,1.222656c.046875.257812.146484.497559.295898.714355.15332.215332.347656.390625.577148.52002.441406.255859.990234.312012,1.495117.136719l1.182617-.427734c.162109.20752.30957.425293.44043.650391.147461.242676.275391.502441.379883.771973l.013672.029297c.003906.010254.009766.025391.017578.046387l-.948242.790527c-.200195.166992-.361328.373047-.476562.614746-.110352.238281-.166016.492676-.166016.757324,0,.265137.055664.52002.166016.757812.110352.235352.267578.439453.46875.606445l.959961.816406c-.110352.265625-.239258.527344-.382812.77832-.139648.242188-.303711.479492-.489258.707031-.099609-.038086-.208984-.080078-.330078-.128906-.158203-.063477-.323242-.124023-.494141-.183594-.166992-.058594-.335938-.109375-.498047-.149414-.169922-.048828-.317383-.072266-.451172-.072266-.387695,0-.735352.109375-1.033203.326172-.295898.214844-.514648.505859-.648438.864258-.033203.089844-.066406.208008-.098633.350586-.03125.140625-.061523.288086-.087891.441406-.027344.154297-.051758.305664-.074219.453125-.016602.101562-.03125.191406-.044922.270508-.125.016602-.250977.029297-.375977.040039-.445312.025391-.891602.015625-1.342773-.050781l-.212891-1.222656c-.047852-.259766-.150391-.500977-.302734-.713867-.148438-.21582-.34082-.390625-.570312-.520508-.443359-.256836-.990234-.313477-1.495117-.136719l-1.182617.427734c-.166016-.211914-.316406-.427734-.446289-.641602-.142578-.246094-.267578-.508789-.385742-.804688-.004883-.008789-.012695-.026367-.021484-.047852v-.001953l.950195-.792969c.201172-.168457.359375-.375.46875-.612793ZM6.084215,9.914948c.244141.243164.533203.4375.858398.577148.326172.139648.682617.210938,1.057617.210938s.730469-.071289,1.055664-.210938c.328125-.139648.616211-.333984.859375-.577148.242188-.243164.436523-.53125.577148-.858887.139648-.328125.210938-.683594.210938-1.056152s-.071289-.728027-.210938-1.056641c-.141602-.327148-.334961-.615723-.577148-.85791-.243164-.242676-.53125-.437012-.859375-.577148-.65625-.28125-1.456055-.28125-2.112305,0-.326172.13916-.614258.333496-.859375.577148-.242188.242676-.436523.531738-.576172.85791-.140625.327637-.211914.683105-.211914,1.056641s.071289.729004.211914,1.056152c.139648.32666.333008.614746.576172.858887ZM6.405504,7.999908c0-.219238.041992-.425781.125-.615234.083008-.194824.198242-.367188.341797-.511719.146484-.14502.316406-.260742.504883-.342285.193359-.08252.40332-.124512.623047-.124512s.426758.041504.616211.124512c.194336.08252.366211.197754.510742.342285s.259766.316406.342773.512695c.082031.188477.124023.39502.124023.614258,0,.219727-.041992.428711-.125.62207-.082031.189941-.197266.359863-.342773.504883-.143555.144043-.31543.259766-.510742.34375-.375.162109-.852539.162109-1.237305,0-.189453-.083008-.360352-.19873-.504883-.34375s-.260742-.314941-.342773-.504883c-.083008-.193359-.125-.402344-.125-.62207Z"></path></svg>,
  Home: () => <svg fill="currentColor" viewBox="64 64 896 896" style={{ width: 12, height: 12 }}><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" /></svg>,
  Search: () => <svg fill="currentColor" viewBox="64 64 896 896" style={{ width: 12, height: 12, opacity: .4 }}><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" /></svg>,
  Filter: () => <svg fill="currentColor" viewBox="64 64 896 896" style={{ width: 12, height: 12, opacity: .4 }}><path d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48z" /></svg>,
  Plus: () => <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: 12, height: 12 }}><path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" /></svg>,
  Edit: () => <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: 11, height: 11 }}><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>,
  Trash: () => <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: 11, height: 11 }}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>,
  Ok: () => <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: 11, height: 11 }}><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>,
  X: () => <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: 11, height: 11 }}><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>,
  Dots: () => <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: 14, height: 14 }}><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></svg>,
  ChevL: () => <svg viewBox="0 0 16 16" style={{ width: 13, height: 13 }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 4L6 8l4 4" /></svg>,
  ChevR: () => <svg viewBox="0 0 16 16" style={{ width: 13, height: 13 }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 4l4 4-4 4" /></svg>,
  Folder: () => <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: 12, height: 12 }}><path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" /></svg>,
  File: () => <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: 10, height: 10 }}><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm0 2l4 4h-4V4z" /></svg>,
  Star: () => <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: 11, height: 11 }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
  Warn: () => <svg fill="#faad14" viewBox="0 0 24 24" style={{ width: 16, height: 16 }}><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>,
  Info: () => <svg fill="#40a9ff" viewBox="0 0 24 24" style={{ width: 16, height: 16 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>,
  Sync: () => <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: 13, height: 13 }}><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" /></svg>,
};

const BnLogo = () => (
  <svg viewBox="0 0 53.19 60" style={{ width: 22, height: 26 }} fill="#ffffff">
    <path d="M14.194 32.594c-.145-.09-2.642 1.346-3.01 1.582-.355.227-1.791 1.206-1.96 1.43-.41.549.304.886.736 1.202 4.383 3.2 11.08 2.916 14.092-1.992.482-.785 1.557-4.273 1.315-4.966-.16-.455-2.575-.069-3.127.013-1.576.233-3.415.81-4.932 1.342-.486.17-2.528.928-2.812 1.135-.205.149-.071.39-.065.59-.322.11-.147-.28-.237-.336z" />
    <path d="M4.329 38.978c.584-.346 1.798-2.037 1.076-2.436-.523-.289-3.502.086-3.729.53-.052.1.191.334.21.455.017.11-.278.104-.31.27-.427 2.191 1.307 2.04 2.753 1.181z" />
    <path d="M52.75 11.187l-1.393-8.306C41.357 5.372 34.072 15.543 32.43 18.009c-1.702-.343-3.54-.502-5.507-.445-7.807.226-15.663 3.401-20.593 9.517-1.864 2.313-3.573 5.052-4.084 8.022 1.655-.857 3.106-2.061 4.725-2.985 6.399-3.653 17.327-7.339 24.405-4.092 4.385 2.012 6.944 8.1 3.23 11.958-4.031 4.189-13.6 1.061-18.712.389-5.078-.667-9.932-.271-14.749 1.499-2.322 9.367 6.292 15.709 14.687 16.597 7.753.82 15.801-1.311 22.009-5.856 13.793-10.097 11.398-28.621-2.325-33.724l.014-.015c5.486-.667 8.806 2.403 8.806 2.403l2.028-3.549c-2.873-1.357-6.286-1.212-8.746-.818 7.357-6.199 15.131-5.722 15.131-5.722z" />
  </svg>
);

const STATUS_CLS = { Completed: s.tagSuccess, Running: s.tagRunning, Failed: s.tagError, Queued: s.tagQueue, Idle: s.tagSuccess, Busy: s.tagRunning, Offline: s.tagMuted, Enabled: s.tagSuccess, Disabled: s.tagMuted, 'Non-SSO': s.tagInfo, Yes: s.tagSuccess };
function Tag({ label, dot }) {
  return <span className={`${s.tag} ${STATUS_CLS[label] ?? s.tagMuted}`}>{dot && <span className={s.tagDot} />}{label}</span>;
}

/* ══ LEFT ICON RAIL ══ */
const NAV = [
  { id: 'dashboard', Icon: Ic.Dash },
  { id: 'projects', Icon: Ic.Proj },
  { id: 'agents', Icon: Ic.Agent },
  { id: 'queue', Icon: Ic.Queue, badge: 1 },
  { id: 'triggers', Icon: Ic.Trig },
  { id: 'users', Icon: Ic.Users, badge: 2 },
  { id: 'settings', Icon: Ic.Cog },
];

/* ══ FEATURE DEFINITIONS ══ */
const FEATURES = [
  {
    id: 'dashboard',
    label: 'Live Dashboard',
    description: 'Real-time build metrics with auto-refresh',
    Icon: Ic.Dash,
    targetPage: 'dashboard',
  },
  {
    id: 'triggers',
    label: 'Automated Builds',
    description: 'Schedule triggers by time, date, or commit',
    Icon: Ic.Trig,
    targetPage: 'triggers',
  },
  {
    id: 'agents',
    label: 'Agent Management',
    description: 'Monitor and control build agents by OS or status',
    Icon: Ic.Agent,
    targetPage: 'agents',
  },
  {
    id: 'users',
    label: 'RBAC & Users',
    description: 'Role-based access with approval workflows',
    Icon: Ic.Users,
    targetPage: 'users',
  },
  {
    id: 'settings',
    label: 'SSO & Settings',
    description: 'Single sign-on providers and system config',
    Icon: Ic.Cog,
    targetPage: 'settings',
  },
];

/* ══ CURSOR HOOK ══ */
function useCursorSequence(shellRef, activeFeat, page) {
  const rafRef = useRef(null);   // rAF id for movement
  const seqRef = useRef(null);   // setTimeout id for sequencing
  const cursorRef = useRef(null);

  // Cancel any in-flight animation + sequence
  const cancel = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (seqRef.current) clearTimeout(seqRef.current);
  }, []);

  // Get element center in shell-local coords, accounting for CSS scale transform
  const rel = useCallback((el) => {
    const shell = shellRef.current;
    if (!el || !shell) return null;
    const scale = parseFloat(shell.style.getPropertyValue('--shell-scale')) || 1;
    const sr = shell.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    return {
      x: (er.left - sr.left) / scale + er.width / scale / 2,
      y: (er.top  - sr.top)  / scale + er.height / scale / 2,
    };
  }, [shellRef]);

  // Animate cursor from current pos → target, then call cb
  const moveTo = useCallback((targetX, targetY, duration, cb) => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const fromX = parseFloat(cursor.style.left) || targetX;
    const fromY = parseFloat(cursor.style.top)  || targetY;
    let start = null;

    function frame(ts) {
      if (!start) start = ts;
      const t = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3); // cubic ease-out
      cursor.style.left = (fromX + (targetX - fromX) * ease) + 'px';
      cursor.style.top  = (fromY + (targetY - fromY) * ease) + 'px';
      if (t < 1) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        cursor.style.left = targetX + 'px';
        cursor.style.top  = targetY + 'px';
        if (cb) cb();
      }
    }
    rafRef.current = requestAnimationFrame(frame);
  }, []);

  // Run a sequence: [{el, pause, duration, click, action}]
  // el: DOM element to target  |  pause: wait after arriving  |  click: fire .click()
  const runSequence = useCallback((steps, loop = false) => {
    const cursor = cursorRef.current;
    if (!cursor || !steps.length) return;
    cursor.style.opacity = '1';
    let idx = 0;

    function next() {
      if (idx >= steps.length) {
        if (loop) { idx = 0; next(); }
        return;
      }
      const step = steps[idx++];
      const pos = step.pos || rel(step.el);
      if (!pos) { next(); return; }

      moveTo(pos.x, pos.y, step.duration ?? 600, () => {
        // Flash the cursor to indicate a click
        if (step.click && step.el) {
          cursor.style.transform = 'scale(0.7)';
          setTimeout(() => { cursor.style.transform = ''; }, 100);
          setTimeout(() => step.el.click(), 80);
        }
        if (step.action) step.action();
        seqRef.current = setTimeout(next, step.pause ?? 500);
      });
    }
    next();
  }, [rel, moveTo]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const shell  = shellRef.current;
    if (!cursor || !shell) return;

    cancel();
    cursor.style.opacity = '0';

    // Wait two frames for the new page to fully render, then build steps from real DOM
    const t = setTimeout(() => {
      requestAnimationFrame(() => requestAnimationFrame(() => {

        switch (activeFeat) {

          /* ── 0: Dashboard — cycle through filter buttons on the 3 panels ── */
          case 0: {
            const filterBtns = [...shell.querySelectorAll(`.${s.iconBtn}`)].slice(0, 4);
            const syncBtn    = shell.querySelector(`.${s.iconBtn}`);
            const firstRow   = shell.querySelector(`.${s.gridRow}`);
            const steps = [];
            filterBtns.forEach(btn => {
              steps.push({ el: btn, pause: 600, duration: 500, click: true });
            });
            if (firstRow) steps.push({ el: firstRow, pause: 700, duration: 500 });
            runSequence(steps, true);
            break;
          }

          /* ── 1: Triggers — click Add Trigger, then click dots menus on each row ── */
          case 1: {
            const addBtn  = shell.querySelector(`.${s.btnPrimary}`);
            const dotBtns = [...shell.querySelectorAll(`.${s.trigTRow} .${s.iconBtn}`)];
            const steps   = [];
            if (addBtn)  steps.push({ el: addBtn,  pause: 800, duration: 550, click: true });
            dotBtns.forEach(btn => {
              steps.push({ el: btn, pause: 600, duration: 500, click: true });
            });
            if (steps.length) runSequence(steps, true);
            break;
          }

          /* ── 2: Agents — click each agent item in sequence, updating detail pane ── */
          case 2: {
            const agentItems = [...shell.querySelectorAll(`.${s.agentItem}`)];
            const osBtns     = [...shell.querySelectorAll(`.${s.osBtn}`)];
            const steps      = [];
            // cycle OS filter buttons first
            osBtns.forEach(btn => {
              steps.push({ el: btn, pause: 500, duration: 450, click: true });
            });
            // then click each agent
            agentItems.forEach(item => {
              steps.push({ el: item, pause: 700, duration: 500, click: true });
            });
            if (steps.length) runSequence(steps, true);
            break;
          }

          /* ── 3: Users — click checkboxes, then Approve / Reject buttons ── */
          case 3: {
            const checkboxes  = [...shell.querySelectorAll(`.${s.checkbox}`)];
            const approveBtns = [...shell.querySelectorAll(`.${s.btnApprove}`)];
            const rejectBtns  = [...shell.querySelectorAll(`.${s.btnReject}`)];
            const tabBtns     = [...shell.querySelectorAll(`.${s.usersTab}`)];
            const steps = [];
            tabBtns.forEach(btn  => steps.push({ el: btn,  pause: 600, duration: 480, click: true }));
            checkboxes.forEach(cb => steps.push({ el: cb,  pause: 350, duration: 420, click: true }));
            approveBtns.slice(0, 2).forEach(btn => steps.push({ el: btn, pause: 500, duration: 450, click: true }));
            rejectBtns.slice(0, 1).forEach(btn  => steps.push({ el: btn, pause: 500, duration: 450, click: true }));
            if (steps.length) runSequence(steps, true);
            break;
          }

          /* ── 4: Settings — click SSO nav, then Edit/Delete buttons on cards ── */
          case 4: {
            const navBtns  = [...shell.querySelectorAll(`.${s.settingsNavBtn}`)];
            const ssoCards = [...shell.querySelectorAll(`.${s.ssoCard}`)];
            const editBtns = [...shell.querySelectorAll(`.${s.ssoCard} .${s.btnOutline}`)];
            const delBtns  = [...shell.querySelectorAll(`.${s.ssoCard} .${s.btnDanger}`)];
            const toggles  = [...shell.querySelectorAll(`.${s.toggle}`)];
            const steps = [];
            // click nav items
            navBtns.forEach(btn => steps.push({ el: btn, pause: 700, duration: 500, click: true }));
            // come back to SSO Settings (first nav)
            if (navBtns[0]) steps.push({ el: navBtns[0], pause: 500, duration: 400, click: true });
            // click edit on first SSO card
            if (editBtns[0]) steps.push({ el: editBtns[0], pause: 600, duration: 480, click: true });
            // click toggle on second card
            if (toggles[1]) steps.push({ el: toggles[1], pause: 600, duration: 500, click: true });
            // hover delete on third card
            if (delBtns[0]) steps.push({ el: delBtns[0], pause: 600, duration: 500 });
            if (steps.length) runSequence(steps, true);
            break;
          }
        }
      }));
    }, 350);

    return () => { clearTimeout(t); cancel(); cursor.style.opacity = '0'; };
  }, [activeFeat, page, cancel, runSequence, shellRef]);

  return cursorRef;
}

/* ══ FEATURE STRIP ══ */
function FeatureStrip({ activeFeat, onSelect }) {
  return (
    <div className={s.featureStrip}>
      {FEATURES.map((feat, i) => (
        <button
          key={feat.id}
          className={`${s.featureBtn} ${activeFeat === i ? s.featureBtnActive : ''}`}
          onClick={() => onSelect(i)}
        >
          <span className={s.featureBtnIcon}>
            <feat.Icon />
          </span>
          <span className={s.featureBtnText}>
            <span className={s.featureBtnLabel}>{feat.label}</span>
            <span className={s.featureBtnDesc}>{feat.description}</span>
          </span>
          {activeFeat === i && <span className={s.featureBtnDot} />}
        </button>
      ))}
    </div>
  );
}

/* ══ PROJECT SIDEBAR TREE ══ */
function ProjectTree({ activePage }) {
  const [expanded, setExpanded] = useState({ 'alpha': true, 'beta': true });
  const toggle = id => setExpanded(e => ({ ...e, [id]: !e[id] }));
  return (
    <div className={s.treePanel}>
      <div className={s.treeSearch}>
        <Ic.Search />
        <span style={{ color: 'rgba(255,255,255,.22)', fontSize: 11, flex: 1 }}>Search builds…</span>
      </div>
      <div className={s.treeSection}>PINNED</div>
      {SIDEBAR_TREE.pinned.map(p => (
        <div key={p} className={s.treeRow} style={{ paddingLeft: 10 }}>
          <span className={s.treeDash}>■</span>
          <span className={s.treeLabel}>{p}</span>
        </div>
      ))}
      <div className={s.treeSection}>PROJECTS</div>
      {SIDEBAR_TREE.projects.map(proj => (
        <div key={proj.id}>
          <div className={`${s.treeRow} ${activePage === 'projects' && proj.id === 'alpha' ? s.treeRowActive : ''}`}
            onClick={() => toggle(proj.id)} style={{ paddingLeft: 6 }}>
            <span className={s.treeArrow}>{expanded[proj.id] ? '▾' : '▸'}</span>
            <Ic.Folder />
            <span className={s.treeLabel}>{proj.name}</span>
          </div>
          {expanded[proj.id] && (
            <div>
              {proj.children?.map(sub => (
                <div key={sub.id}>
                  <div className={s.treeRow} style={{ paddingLeft: 20 }} onClick={() => toggle(sub.id)}>
                    <span className={s.treeArrow}>{expanded[sub.id] ? '▾' : '▸'}</span>
                    <Ic.Folder />
                    <span className={s.treeLabel}>{sub.name}</span>
                  </div>
                  {expanded[sub.id] && sub.configs?.map(c => (
                    <div key={c} className={s.treeRow} style={{ paddingLeft: 32 }}>
                      <span className={s.treeDash}>■</span>
                      <span className={s.treeLabel} style={{ fontSize: 11 }}>{c}</span>
                    </div>
                  ))}
                </div>
              ))}
              {proj.configs?.map(c => (
                <div key={c} className={s.treeRow} style={{ paddingLeft: 20 }}>
                  <span className={s.treeDash}>■</span>
                  <span className={s.treeLabel} style={{ fontSize: 11 }}>{c}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ══ DASHBOARD ══ */
function Dashboard() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? BUILDS : BUILDS.filter(b => b.status === filter);
  const maxPct = Math.max(...SUCCESS_CONFIGS.map(c => c.pct));

  return (
    <div className={s.page}>
      <div className={s.dashToolbar}>
        <div className={s.selectMock} style={{ gap: 5 }}><svg fill="currentColor" viewBox="64 64 896 896" style={{ width: 12, height: 12, opacity: .5 }}><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380z" /></svg>Last 3 years <svg fill="currentColor" viewBox="64 64 896 896" style={{ width: 9, height: 9, opacity: .4 }}><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></svg></div>
        <button className={s.iconBtn}><Ic.Sync /></button>
        <div className={s.selectMock}>Every 10s <svg fill="currentColor" viewBox="64 64 896 896" style={{ width: 9, height: 9, opacity: .4 }}><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></svg></div>
      </div>
      <div className={s.dashPanels}>
        <div className={s.dashPanel}>
          <div className={s.dashPanelHead}>CONFIGURATION SUCCESS RATE <button className={s.iconBtn}><Ic.Filter /></button></div>
          <div className={s.dashPanelBody}>
            <div className={s.statRow}>
              <span className={s.bigPct} style={{ color: '#d8305b' }}>49%</span>
              <span className={s.statLabel}>Overall Success Rate</span>
              <span className={s.statRight}>All data • 49 processes</span>
            </div>
            <div className={s.barChart}>
              {SUCCESS_CONFIGS.map((c, i) => {
                const color = c.pct >= 80 ? '#62de56' : c.pct >= 50 ? '#faad14' : '#ff7276';
                const h = Math.max(4, Math.round(c.pct / 100 * 90));
                return (
                  <div key={i} className={s.barCol}>
                    {c.pct > 0 && <span className={s.barLabel}>{c.pct}%</span>}
                    <div className={s.barFill} style={{ height: h, background: color }} />
                    <span className={s.barName}>{c.name.slice(0, 4)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={s.dashPanel}>
          <div className={s.dashPanelHead}>TOP 5 BUILD HISTORY <button className={s.iconBtn}><Ic.Filter /></button></div>
          <div className={s.dashPanelBody}>
            <div className={s.chartTitle}>Overall Run Time in last 36 months</div>
            <div className={s.lineChartWrap}>
              <div className={s.lineYLabel}>Runtime</div>
              <svg className={s.lineSvg} viewBox="0 0 300 110" preserveAspectRatio="none">
                <path d="M0 108 L50 105 L100 100 L150 80 L200 30 L250 25 L300 22" fill="none" stroke="#d8305b" strokeWidth="2" />
                <path d="M0 108 L60 107 L120 107 L180 107 L240 107 L300 107" fill="none" stroke="#40a9ff" strokeWidth="1.5" opacity=".7" />
                <path d="M0 108 L60 107 L120 107 L180 107 L240 107 L300 107" fill="none" stroke="#00c951" strokeWidth="1.5" opacity=".5" />
                <path d="M0 108 L50 108 L100 108 L150 108 L200 107 L250 106 L300 105" fill="none" stroke="#faad14" strokeWidth="1.5" opacity=".5" />
                {[0, 60, 120, 180, 240, 300].map((x, i) => {
                  const ys = [108, 105, 100, 80, 30, 22];
                  return <circle key={i} cx={x} cy={ys[i]} r="3.5" fill="#40a9ff" />;
                })}
              </svg>
            </div>
            <div className={s.legend}>
              {TOP5_CONFIGS.map(c => (
                <div key={c.name} className={s.legendItem}>
                  <div className={s.legendDot} style={{ background: c.color }} />
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={s.dashPanel}>
          <div className={s.dashPanelHead}>AGENT UTILIZATION <button className={s.iconBtn}><Ic.Filter /></button></div>
          <div className={s.dashPanelBody}>
            <div className={s.statRow}>
              <span className={s.bigPct}>&lt;1%</span>
              <span className={s.statLabel}>Overall Agent Utilization</span>
              <span className={s.statRight}>All data • 44666 builds</span>
            </div>
            <div className={s.treemap}>
              {AGENT_TREEMAP.map((a, i) => (
                <div key={i} className={s.treemapCell} style={{ background: a.color, flex: Math.max(a.pct, 1) }}>
                  <span className={s.tmName}>{a.name}</span>
                  <span className={s.tmPct}>{a.pct}%</span>
                  <span className={s.tmBuilds}>{a.builds}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={s.recentBuilds}>
        <div className={s.rbHead}>
          <span className={s.rbTitle}>RECENT BUILDS</span>
          <button className={s.iconBtn}><Ic.Filter /></button>
        </div>
        <div className={s.grid} style={{ '--cols': '90px 1fr 120px 130px 130px 100px' }}>
          <div className={s.gridHead}><span>Build Number</span><span>Configuration</span><span>Status</span><span>Trigger Time</span><span>Completed At</span><span>Duration</span></div>
          {shown.map(b => (
            <div key={b.id} className={s.gridRow}>
              <span className={s.link}>{b.id}</span>
              <span>{b.config}</span>
              <span><Tag label={b.status} dot={b.status === 'Running'} /></span>
              <span className={s.muted}>{b.trigger}</span>
              <span className={s.muted}>{b.completed}</span>
              <span className={s.muted}>{b.duration}</span>
            </div>
          ))}
        </div>
        <div className={s.pagination}>
          <button className={s.pgBtn}>&lt;</button>
          {[1, 2, 3, 4, 5].map(n => <button key={n} className={`${s.pgBtn} ${n === 1 ? s.pgActive : ''}`}>{n}</button>)}
          <span className={s.pgDots}>···</span>
          <button className={s.pgBtn}>12085</button>
          <button className={s.pgBtn}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

/* ══ PROJECTS ══ */
function Projects() {
  const [tab, setTab] = useState('Projects');
  return (
    <div className={s.page}>
      <div className={s.projTopRow}>
        <div className={s.projActive}>
          <div className={s.projActiveDot} />
          <span className={s.projName}>{PROJECT.name}</span>
          <button className={s.iconBtn}><Ic.Edit /></button>
          <button className={s.iconBtn}><Ic.Star /></button>
        </div>
        <button className={s.btnPrimary}><Ic.Plus /> New Build Configuration</button>
      </div>
      <div className={s.projNavRow}>
        {[
          { id: 'Projects', sub: 'Manage sub-projects', Icon: Ic.Proj },
          { id: 'Members', sub: 'Manage project members', Icon: Ic.Users },
          { id: 'Settings', sub: 'View project settings', Icon: Ic.Cog },
        ].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`${s.projNavBtn} ${tab === t.id ? s.projNavActive : ''}`}>
            <span className={s.projNavIcon}><t.Icon /></span>
            <div className={s.projNavText}>
              <span className={s.projNavLabel}>{t.id}</span>
              <span className={s.projNavSub}>{t.sub}</span>
            </div>
          </button>
        ))}
      </div>
      {tab === 'Projects' && (
        <div className={s.projContent}>
          <div className={s.projContentHead}>
            <span className={s.projContentTitle}>Projects</span>
            <span className={s.muted}>Manage sub-projects</span>
          </div>
          <div className={s.configRow} style={{ background: '#2e2e2e', borderRadius: 8 }}>
            <div className={s.configRowIcon} style={{ color: 'rgba(255,255,255,.3)' }}><Ic.Folder /></div>
            <div>
              <div className={s.configName} style={{ fontSize: 13 }}>dev</div>
              <div className={s.muted} style={{ fontSize: 11 }}>Project Group</div>
            </div>
          </div>
          {PROJECT.configs.map(c => (
            <div key={c.name} className={s.configRow}>
              <div className={s.configRowIcon} style={{ background: 'rgba(216,48,91,.15)', color: '#d8305b', borderRadius: 6, padding: 5 }}>
                <svg fill="currentColor" viewBox="0 0 16 16" style={{ width: 14, height: 14 }}><path d="M5.481 11.479c-.13 0-.255-.027-.373-.08a.97.97 0 0 1-.313-.215.97.97 0 0 1-.214-.313.97.97 0 0 1-.08-.372V5.46c0-.13.027-.255.08-.373a.97.97 0 0 1 .527-.527.97.97 0 0 1 .373-.08h5.04c.13 0 .255.027.373.08a.97.97 0 0 1 .527.527c.053.118.08.243.08.373v5.039c0 .13-.027.255-.08.373a.97.97 0 0 1-.527.527.97.97 0 0 1-.373.08H5.48z" /></svg>
              </div>
              <div className={s.configRowBody}>
                <div className={s.configName}>{c.name}</div>
                <div className={s.configMeta}>
                  <span className={s.link}>{c.lastBuild}</span>
                  <Tag label={c.status} />
                  <span className={s.muted}>{c.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {tab !== 'Projects' && <div className={s.emptyState}><span className={s.muted}>No content to display</span></div>}
    </div>
  );
}

/* ══ AGENTS ══ */
function Agents() {
  const [sel, setSel] = useState(AGENTS[0].id);
  const [os, setOs] = useState('All');
  const [agentTab, setAgentTab] = useState('Information');
  const agent = AGENTS.find(a => a.id === sel);
  const filtered = os === 'All' ? AGENTS : AGENTS.filter(a => a.os === os);
  return (
    <div className={s.agentsShell}>
      <div className={s.agentLeft}>
        <div className={s.filterGroup}>
          <div className={s.filterLabel}>Filter by OS</div>
          <div className={s.osFilters}>
            {['All', 'Windows', 'Linux', 'macOS'].map(o => (
              <button key={o} onClick={() => setOs(o)}
                className={`${s.osBtn} ${os === o ? s.osBtnActive : ''}`}>{o}</button>
            ))}
          </div>
        </div>
        <div className={s.filterGroup}>
          <div className={s.filterLabel}>Filter by Status</div>
          <div className={s.selectMock} style={{ width: '100%' }}>All<svg fill="currentColor" viewBox="64 64 896 896" style={{ width: 9, height: 9, marginLeft: 'auto', opacity: .35 }}><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></svg></div>
        </div>
        <div className={s.agentListLabel}>Agents ({filtered.length})</div>
        <div className={s.agentList}>
          {filtered.map(a => (
            <div key={a.id} onClick={() => setSel(a.id)}
              className={`${s.agentItem} ${sel === a.id ? s.agentItemActive : ''}`}>
              <div className={s.agentItemLeft}>
                <svg fill="currentColor" viewBox="0 0 16 16" style={{ width: 14, height: 14, opacity: .5 }}><path d="M13.13 1.593H2.87C1.84 1.593 1 2.437 1 3.474v6.466c0 1.037.84 1.88 1.87 1.88h4.542v1.411H5.435c-.325 0-.588.263-.588.588s.263.588.588.588h5.13c.325 0 .588-.263.588-.588s-.263-.588-.588-.588H8.588v-1.411h4.542c1.031 0 1.87-.843 1.87-1.88V3.474c0-1.037-.839-1.881-1.87-1.881zm.694 8.347c0 .389-.312.705-.694.705H2.87c-.383 0-.695-.316-.695-.705V3.474c0-.389.312-.705.695-.705h10.26c.382 0 .694.316.694.705v6.466z" /></svg>
                <span className={s.agentName}>{a.name}</span>
              </div>
              <span className={s.agentStatusDot} style={{ background: '#00c951' }} />
              <div className={s.muted} style={{ fontSize: 10, marginLeft: 4 }}>{a.status}</div>
            </div>
          ))}
        </div>
      </div>
      {agent && (
        <div className={s.agentRight}>
          <div className={s.agentRightHead}>
            <div>
              <div className={s.agentRightName}>
                <svg fill="currentColor" viewBox="0 0 16 16" style={{ width: 16, height: 16, opacity: .6 }}><path d="M13.13 1.593H2.87C1.84 1.593 1 2.437 1 3.474v6.466c0 1.037.84 1.88 1.87 1.88h4.542v1.411H5.435c-.325 0-.588.263-.588.588s.263.588.588.588h5.13c.325 0 .588-.263.588-.588s-.263-.588-.588-.588H8.588v-1.411h4.542c1.031 0 1.87-.843 1.87-1.88V3.474c0-1.037-.839-1.881-1.87-1.881zm.694 8.347c0 .389-.312.705-.694.705H2.87c-.383 0-.695-.316-.695-.705V3.474c0-.389.312-.705.695-.705h10.26c.382 0 .694.316.694.705v6.466z" /></svg>
                <h2 className={s.agentTitle}>{agent.name}</h2>
              </div>
              <div className={s.agentSubHead}><Tag label="Idle" /> <span className={s.muted} style={{ fontSize: 11 }}>ID: {agent.id}</span></div>
            </div>
            <button className={s.btnOutline}><Ic.Sync /> Refresh</button>
          </div>
          <div className={s.agentTabBar}>
            {['Information', 'Parameters', 'Actions'].map(t => (
              <button key={t} onClick={() => setAgentTab(t)}
                className={`${s.agentTab} ${agentTab === t ? s.agentTabActive : ''}`}>{t}</button>
            ))}
          </div>
          {agentTab === 'Information' && (
            <div className={s.agentInfoSection}>
              <div className={s.agentSectionTitle}>Agent Information</div>
              {[
                ['Name', agent.name],
                ['Last Active', agent.lastActive],
                ['Authorized', agent.authorized ? <Tag label="Yes" /> : null],
                ['API URL', agent.apiUrl],
                ['Running Build', <em className={s.muted}>No running build</em>],
                ['Agent Version', agent.version],
                ['OS Name & Version', agent.osVer],
                ['Data Directory', agent.dataDir],
              ].map(([k, v]) => (
                <div key={k} className={s.agentInfoRow}>
                  <span className={s.agentInfoKey}>{k}</span>
                  <span className={s.agentInfoVal}>{v}</span>
                </div>
              ))}
            </div>
          )}
          {agentTab !== 'Information' && <div className={s.emptyState}><span className={s.muted}>No data</span></div>}
        </div>
      )}
    </div>
  );
}

/* ══ QUEUE ══ */
function Queue() {
  return (
    <div className={s.page}>
      <div className={s.queueHeader}>
        <h1 className={s.pageH1}>Builds Queue</h1>
        <p className={s.pageSub}>Monitor and manage all currently queued builds across configuration. Drag rows to reorder the queue.</p>
      </div>
      <div className={s.queueFilters} style={{ flexWrap: 'wrap' }}>
        <div className={s.searchBox}><Ic.Search /><span style={{ color: 'rgba(255,255,255,.22)', fontSize: 11 }}>Search Build Configurations</span></div>
        <div className={s.selectMock}>All Status <svg fill="currentColor" viewBox="64 64 896 896" style={{ width: 9, height: 9, opacity: .35, marginLeft: 4 }}><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></svg></div>
        <div style={{ flex: 1 }} />
        <div className={s.toggleRow}>
          <div className={s.toggleTrack}><div className={s.toggleThumb} /></div>
          <span className={s.muted} style={{ fontSize: 11 }}>Enable Reordering</span>
        </div>
      </div>
      <div className={s.queueCards}>
        <div className={s.queueCard}>
          <div className={s.qcIcon} style={{ color: '#40a9ff' }}><Ic.Info /></div>
          <div><div className={s.qcNum}>0</div><div className={s.qcLabel}>Ready To Run</div></div>
        </div>
        <div className={s.queueCard}>
          <div className={s.qcIcon} style={{ color: '#faad14' }}><Ic.Warn /></div>
          <div><div className={s.qcNum}>0</div><div className={s.qcLabel}>Waiting for Agents</div>
            <span className={s.qcBadge}>0</span></div>
        </div>
        <div className={s.queueCard}>
          <div className={s.qcIcon} style={{ color: '#ff7276' }}><Ic.Warn /></div>
          <div><div className={s.qcNum}>1</div><div className={s.qcLabel}>Agent Issues</div></div>
        </div>
        <div className={s.queueCard}>
          <div className={s.qcIcon} style={{ color: '#40a9ff' }}><Ic.Info /></div>
          <div><div className={s.qcNum}>1</div><div className={s.qcLabel}>Total Queue</div></div>
        </div>
      </div>
      <div className={s.queueTable}>
        <div className={s.queueTHead}>
          <span style={{ width: 24 }}>#</span>
          <span style={{ flex: 1 }}>Configuration Name</span>
          <span style={{ width: 180 }}>Queued Time</span>
          <span style={{ width: 180 }}>Status</span>
        </div>
        {QUEUE_ITEMS.map(q => (
          <div key={q.position} className={s.queueTRow}>
            <span className={s.muted} style={{ width: 24 }}>{q.position}</span>
            <div style={{ flex: 1 }}>
              <div className={s.link}>{q.config}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                <span className={s.buildPill}>{q.build}</span>
              </div>
            </div>
            <div style={{ width: 180 }}>
              <div className={s.bold}>{q.queuedAgo}</div>
              <div className={s.muted} style={{ fontSize: 10 }}>Queued at {q.queuedAt}</div>
            </div>
            <span style={{ width: 180 }} className={s.muted}>{q.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══ TRIGGERS ══ */
function TriggersDash() {
  const [search, setSearch] = useState('');
  const shown = TRIGGERS.filter(t => t.name.includes(search) || t.config.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className={s.page}>
      <div className={s.trigHead}>
        <h1 className={s.pageH1}>Triggers Dashboard</h1>
        <button className={s.btnPrimary}><Ic.Plus /> Add Trigger</button>
      </div>
      <div className={s.trigFilters}>
        <div className={s.searchBox} style={{ minWidth: 220 }}>
          <Ic.Search />
          <input className={s.searchInput} placeholder="Search by trigger name…"
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className={s.selectMock} style={{ minWidth: 120 }}>All Statuses <svg fill="currentColor" viewBox="64 64 896 896" style={{ width: 9, height: 9, opacity: .35, marginLeft: 4 }}><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></svg></div>
        <div className={s.selectMock} style={{ minWidth: 120 }}>All Schedules <svg fill="currentColor" viewBox="64 64 896 896" style={{ width: 9, height: 9, opacity: .35, marginLeft: 4 }}><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></svg></div>
      </div>
      <div className={s.trigTable}>
        <div className={s.trigTHead}>
          <span style={{ flex: '0 0 130px' }}>Name</span>
          <span style={{ flex: '0 0 180px' }}>Build Configuration</span>
          <span style={{ flex: 1 }}>Schedule</span>
          <span style={{ flex: '0 0 110px' }}>Next Run ↑</span>
          <span style={{ flex: '0 0 80px' }}>Status</span>
          <span style={{ flex: '0 0 60px' }}>Actions</span>
        </div>
        {shown.map((t, i) => (
          <div key={i} className={s.trigTRow}>
            <span style={{ flex: '0 0 130px' }} className={s.bold}>{t.name}</span>
            <div style={{ flex: '0 0 180px' }}>
              {t.config.split('/').map((seg, si, arr) => (
                <span key={si}>{si > 0 && <span className={s.muted}> / </span>}<span className={s.link}>{seg.trim()}</span></span>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <span className={`${s.schedTag} ${t.schedule === 'Daily' ? s.schedDaily : s.schedCustom}`}>{t.schedule}</span>
              <div className={s.muted} style={{ fontSize: 10, marginTop: 2 }}>{t.detail} {t.tz}</div>
            </div>
            <span style={{ flex: '0 0 110px' }} className={t.enabled ? s.bold : s.muted}>{t.nextRun}</span>
            <span style={{ flex: '0 0 80px' }}>
              {t.enabled
                ? <span className={s.enabledPill}>Enabled</span>
                : <span className={s.muted}>Disabled</span>}
            </span>
            <div style={{ flex: '0 0 60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button className={s.iconBtn}><Ic.Dots /></button>
            </div>
          </div>
        ))}
      </div>
      <div className={s.pagination}>
        <button className={s.pgBtn}>&lt;</button>
        {[1, 2, 3].map(n => <button key={n} className={`${s.pgBtn} ${n === 1 ? s.pgActive : ''}`}>{n}</button>)}
        <button className={s.pgBtn}>&gt;</button>
      </div>
    </div>
  );
}

/* ══ USERS ══ */
function Users() {
  const [tab, setTab] = useState('Pending Approvals');
  return (
    <div className={s.page}>
      <div className={s.usersHead}>
        <h1 className={s.pageH1}>User Management</h1>
        <div className={s.usersBadges}>
          <div className={s.usersBadge} style={{ background: 'rgba(216,48,91,.12)', border: '1px solid rgba(216,48,91,.25)', color: '#d8305b' }}>
            <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: 11, height: 11 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
            <span>{USERS_STATS.pending} Pending</span>
          </div>
          <div className={s.usersBadge} style={{ background: 'rgba(216,48,91,.10)', border: '1px solid rgba(216,48,91,.2)', color: '#d8305b' }}>
            <Ic.Users /><span>{USERS_STATS.total} Users</span>
          </div>
        </div>
      </div>
      <div className={s.usersTabBar}>
        {['Pending Approvals', 'Users'].map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`${s.usersTab} ${tab === t ? s.usersTabActive : ''}`}>{t}</button>
        ))}
      </div>
      {tab === 'Pending Approvals' && (
        <div>
          <div style={{ marginBottom: 10 }}>
            <div className={s.bold}>Pending Approval</div>
            <div className={s.muted} style={{ fontSize: 11 }}>Review and approve user registration requests.</div>
          </div>
          <div className={s.usersFilters}>
            <div className={s.searchBox}><Ic.Search /><span className={s.muted} style={{ fontSize: 11 }}>Search requests…</span></div>
            <div className={s.selectMock} style={{ minWidth: 100 }}>Start date</div>
            <div className={s.selectMock} style={{ minWidth: 100 }}>End date</div>
            <div className={s.selectMock} style={{ minWidth: 90 }}>Method</div>
            <div style={{ flex: 1 }} />
            <button className={s.btnApprove}><Ic.Ok /> Approve</button>
            <button className={s.btnReject}><Ic.X /> Reject</button>
            <button className={s.btnOutline}>↑ Export</button>
          </div>
          <div className={s.grid} style={{ '--cols': '20px 1fr 150px 120px 200px' }}>
            <div className={s.gridHead}><span /><span>User</span><span>Registration Date</span><span>Registration Method</span><span>Actions</span></div>
            {USERS_PENDING.map(u => (
              <div key={u.email} className={s.gridRow}>
                <div className={s.checkbox} />
                <div>
                  <div className={s.bold}>{u.name}</div>
                  <div className={s.link} style={{ fontSize: 11 }}>{u.email}</div>
                </div>
                <span className={s.muted}>{u.date}</span>
                <span>{u.method}</span>
                <div style={{ display: 'flex', gap: 6 }}>
                  <button className={s.btnApprove}><Ic.Ok /> Approve</button>
                  <button className={s.btnReject}><Ic.X /> Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {tab === 'Users' && <div className={s.emptyState}><span className={s.muted}>User list</span></div>}
    </div>
  );
}

/* ══ SETTINGS ══ */
function Settings() {
  const [activeTab, setActiveTab] = useState('SSO Settings');
  return (
    <div className={s.settingsShell}>
      <div className={s.settingsLeft}>
        <div className={s.settingsTitle}>Settings</div>
        <div className={s.settingsSub}>Manage your application configuration and preferences</div>
        {[
          { id: 'SSO Settings', Icon: Ic.Cog },
          { id: 'Notifier Settings', Icon: Ic.Trig },
          { id: 'Mail Templates', Icon: Ic.File },
          { id: 'Manage License', Icon: Ic.Search },
        ].map(item => (
          <button key={item.id} onClick={() => setActiveTab(item.id)}
            className={`${s.settingsNavBtn} ${activeTab === item.id ? s.settingsNavActive : ''}`}>
            <span className={s.settingsNavIcon}><item.Icon /></span>
            <span>{item.id}</span>
          </button>
        ))}
      </div>
      <div className={s.settingsRight}>
        {activeTab === 'SSO Settings' && (
          <div className={s.page}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <div>
                <h2 className={s.pageH1}>SSO Settings</h2>
                <p className={s.pageSub}>Manage Single Sign-On(SSO) providers for your organization.</p>
              </div>
              <button className={s.btnPrimary}><Ic.Plus /> Add SSO Provider</button>
            </div>
            <div className={s.ssoGrid}>
              {SSO_PROVIDERS.map((p, i) => (
                <div key={i} className={s.ssoCard}>
                  <div className={s.ssoCardTop}>
                    <div className={s.ssoCardLeft}>
                      <span className={s.ssoIcon}>{p.icon}</span>
                      <span className={s.ssoName}>{p.name}</span>
                    </div>
                    <div className={s.ssoToggleRow}>
                      <span className={p.enabled ? s.enabledText : s.muted}>{p.enabled ? 'Enabled' : 'Disabled'}</span>
                      <div className={`${s.toggle} ${p.enabled ? s.toggleOn : ''}`}><div className={s.toggleBall} /></div>
                    </div>
                  </div>
                  <div className={s.ssoField}><span className={s.ssoKey}>Client ID :</span> <span className={s.ssoVal}>{p.clientId}</span></div>
                  <div className={s.ssoField}><span className={s.ssoKey}>Auth URL :</span> <span className={s.ssoVal}>{p.authUrl}</span></div>
                  <div className={s.ssoActions}>
                    <button className={s.btnOutline}><Ic.Edit /> Edit</button>
                    <button className={s.btnDanger}><Ic.Trash /> Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'Manage License' && (
          <div className={s.page}>
            <h2 className={s.pageH1}>Manage License</h2>
            <div className={s.licCard}>
              <div className={s.licCardHead}><span className={s.sectionTitle}>Activate License</span></div>
              <div className={s.muted} style={{ padding: '8px 14px', fontSize: 12 }}>Register your license to unlock features</div>
              <div className={s.licInfo}>
                <div className={s.licInfoHead}><span className={s.sectionTitle}>License Information</span><Tag label="Active" /></div>
                {[['Current Plan', LICENSE.plan], ['Valid Until', `${LICENSE.validUntil} (${LICENSE.remaining})`]].map(([k, v]) => (
                  <div key={k} className={s.agentInfoRow}><span className={s.agentInfoKey}>{k}</span><span className={s.agentInfoVal}>{v}</span></div>
                ))}
              </div>
              <div style={{ padding: '10px 14px 14px', display: 'flex', gap: 8 }}>
                <button className={s.btnPrimary}>Activate Online</button>
                <button className={s.btnOutline}>Activate Offline</button>
              </div>
            </div>
          </div>
        )}
        {(activeTab === 'Notifier Settings' || activeTab === 'Mail Templates') && (
          <div className={s.page}><div className={s.emptyState}><Ic.Cog /><span className={s.muted}>Configure {activeTab}</span></div></div>
        )}
      </div>
    </div>
  );
}

/* ══ ROOT ══ */
const PAGES = { dashboard: Dashboard, projects: Projects, agents: Agents, queue: Queue, triggers: TriggersDash, users: Users, settings: Settings };

export default function BuildNinjaDemo() {
  const [page, setPage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeFeat, setActiveFeat] = useState(0);
  const shellRef = useRef(null);
  const wrapperRef = useRef(null);

  const Page = PAGES[page];
  const showTree = ['projects'].includes(page) && !sidebarCollapsed;

  // Cursor hook
  const cursorRef = useCursorSequence(shellRef, activeFeat, page);

  // When a feature button is clicked, navigate to the right page
  const handleFeatSelect = useCallback((idx) => {
    setActiveFeat(idx);
    setPage(FEATURES[idx].targetPage);
  }, []);

  // Auto-cycle features every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeat(prev => {
        const next = (prev + 1) % FEATURES.length;
        setPage(FEATURES[next].targetPage);
        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const update = () => {
      const scale = wrapper.offsetWidth / 1100;
      wrapper.style.setProperty('--shell-scale', scale);
      wrapper.style.paddingBottom = `${(580 / 1100) * 100}%`;
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(wrapper);
    return () => ro.disconnect();
  }, []);

  return (
    <div>
      {/* ── Feature Strip ── */}
      <FeatureStrip activeFeat={activeFeat} onSelect={handleFeatSelect} />

      {/* ── Dashboard Shell ── */}
      <div className={s.scaleWrapper} ref={wrapperRef}>
        <div className={s.shell} ref={shellRef} style={{ position: 'relative' }}>

          {/* ── Cursor overlay ── */}
          <div
            ref={cursorRef}
            style={{
              position: 'absolute',
              width: 20,
              height: 24,
              pointerEvents: 'none',
              zIndex: 9999,
              opacity: 0,
              transition: 'opacity 0.3s, transform 0.08s ease',
              transformOrigin: '4px 2px',
              left: 100,
              top: 100,
            }}
          >
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.7))' }}>
              <path d="M4 2L17 12L10.5 13.5L8 22L4 2Z" fill="white" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>

          {/* ── Icon rail ── */}
          <div className={s.rail}>
            <div className={s.railLogo}><BnLogo /></div>
            {NAV.map(({ id, Icon, badge }) => (
              <button key={id} onClick={() => { setPage(id); setSidebarCollapsed(false); }}
                className={`${s.railBtn} ${page === id ? s.railBtnActive : ''}`}
                title={id}>
                <Icon />
                {badge && <span className={s.railBadge}>{badge}</span>}
              </button>
            ))}
            <div style={{ flex: 1 }} />
            <button className={s.railBtn} onClick={() => setSidebarCollapsed(c => !c)}>
              {sidebarCollapsed ? <Ic.ChevR /> : <Ic.ChevL />}
            </button>
          </div>

          {/* ── Project tree ── */}
          {showTree && <ProjectTree activePage={page} />}

          {/* ── Main ── */}
          <div className={s.main}>
            <header className={s.topbar}>
              <nav className={s.breadcrumb} style={{ overflow: 'hidden', minWidth: 0 }}>
                <Ic.Home />
                <span className={s.breadSep}>/</span>
                <span style={{ textTransform: 'capitalize' }}>{page === 'settings' ? 'Settings' : page}</span>
              </nav>
              <div className={s.topRight}>
                <button className={s.iconBtn}><svg fill="currentColor" viewBox="64 64 896 896" style={{ width: 16, height: 16, opacity: .5 }}><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.9 8.1-39.9 22.3-53.3 40.9-13.1 18.3-20 39.5-20 61.3V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-17.7c0-32.2 18.6-61.3 49.2-74.7 39.3-17.1 67.2-55.2 67.2-99.3.1-57.1-44.5-105.4-100.8-110.6z" /><circle cx="512" cy="728" r="32" /></svg></button>
                <div className={s.avatar}><Image src="/resources/Navbar/ninjaAvatar.png" width={22} height={22} alt="Ninja Logo" /></div>
              </div>
            </header>
            <div className={s.content}><Page /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
