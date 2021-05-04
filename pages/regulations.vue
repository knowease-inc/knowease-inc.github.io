<template>
  <v-container
    fluid
    class="d-flex justify-center align-center mt-10 mb-15 mx-0 px-0 px-sm-3"
  >
    <v-card flat max-width="800" class="ma-0 pa-0" color="rgba(0, 0, 0, 0)">
      <!-- ### Start : Guidelines ### -->
      <title-standard upper-title="기본 지침"></title-standard>
      <v-row :class="rowSettings">
        <v-col class="ma-0 pa-0">
          <v-card :class="classSettings" flat outlined tile>
            <div class="ml-5">
              <h2 id="1-">1. 기본</h2>
              <div class="ml-3">
                <ol>
                  <li>
                    <strong
                      >전문/기술 용어의 쉬운 설명이 갖는 가치를
                      우선합니다.</strong
                    >
                  </li>
                  <li><strong>전문/기술 용어만을 다룹니다.</strong></li>
                  <li>
                    <strong
                      >중립적인 시각의 전문/기술 용어 등록, 설명 및 추천을
                      합니다.</strong
                    >
                  </li>
                  <li><strong>저작권 침해를 하지 않습니다.</strong></li>
                  <li><strong>다른 사용자를 존중합니다.</strong></li>
                </ol>
              </div>
              <v-divider dark class="mt-3"></v-divider>
              <h2 id="2-">2. 전문/기술 용어</h2>
              <div class="ml-3">
                <ol>
                  <li>
                    전문/기술 용어란?
                    <ol>
                      <li>
                        아래 2항, 3항의 정리에 따라 전문 용어와 기술 용어는
                        혼재되어 사용되는 경우가 있습니다. 결과적으로
                        &#39;전문/기술 용어&#39;는 특정 분야의 지식을 통해야만
                        이해할 수 있는 것으로, 이 과정에서 특히 쉬운 설명이
                        필요하다는 공통점으로 인해 한데 묶어 다룹니다.
                      </li>
                      <li>
                        &#39;전문 용어&#39;는 특정 전문 분야에서 사용되는 용어를
                        뜻합니다.
                        <ul>
                          <li>예1. 미술 분야의 &#39;크로키&#39;</li>
                          <li>예2. 금융 분야의 &#39;콜 옵션&#39;</li>
                        </ul>
                      </li>
                      <li>
                        &#39;기술 용어&#39;는 기술, 과학과 관련한 글쓰기에서
                        특정 개념이 갖는 많은 정보를 압축해 표현하기 위해
                        사용되는 용어를 뜻합니다.
                        <ul>
                          <li>
                            예1. &#39;원자력(Nuclear Energy)&#39;,
                            &#39;중력(Gravity)&#39;,
                            &#39;자화(Magnetization)&#39; 등
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  <li>
                    신규 등록
                    <ol>
                      <li>
                        사용자가 신규 전문/기술 용어를 등록하면, 이후 관리자
                        직접 심사를 거쳐 공개됩니다.
                        <ul>
                          <li>심사 기준: 본 문서의 1조, 2조 각 항목 참조</li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  <li>
                    수정/삭제
                    <ul>
                      <li>
                        현재 지원하지 않는 기능입니다. 서비스 연락처([소개] &gt;
                        [연락])를 통해 문의 부탁드립니다.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
              <v-divider dark class="mt-3"></v-divider>
              <h2 id="3-">3. 설명</h2>
              <div class="ml-3">
                <ol>
                  <li>
                    설명이란?
                    <ol>
                      <li>
                        어떤 것을 상대편이 잘 이해할 수 있도록 쉽게, 또는 명확한
                        사실들을 정확히 전달하여 말하는 것을 의미합니다.
                      </li>
                      <li>
                        본 서비스에서 &#39;설명&#39;은, 상기 설명이 갖는
                        의미에서 상대편이 최대한 잘 이해할 수 있도록 쉽게 하는
                        설명을 뜻합니다.
                      </li>
                      <li>1,000자로 제한됩니다.</li>
                    </ol>
                  </li>
                  <li>
                    신규 등록
                    <ol>
                      <li>
                        사용자가 신규 설명을 등록하면, 곧바로 등록이
                        이루어집니다. (단, 설명하는 전문/기술 용어가 심사 완료된
                        상태여야 보입니다.)
                      </li>
                    </ol>
                  </li>
                  <li>
                    평가
                    <ol>
                      <li>
                        등록된 설명은 &#39;쉬워요&#39; 버튼에 의해 얼마나 쉽게
                        설명했는지를 사용자들이 누적평가될 수 있습니다.
                      </li>
                      <li>
                        &#39;쉬워요&#39;에 의한 평가는 [4조. 업적]에 따라
                        사용자가 혜택을 받는 기준이 될 수 있습니다.
                      </li>
                      <li>
                        등록된 설명은 &#39;신고&#39; 버튼에 의해 사용자가 직접
                        발견한 문제에 의한 문제제기를 받을 수 있고, 삭제 조치될
                        수 있습니다.
                      </li>
                    </ol>
                  </li>
                  <li>
                    수정 및 삭제
                    <ol>
                      <li>
                        수정
                        <ol>
                          <li>
                            등록된 설명은 등록한 사용자인 경우, 직접 수정할 수
                            있습니다.
                          </li>
                          <li>수정 시에도 글자 제한을 초과할 수 없습니다.</li>
                        </ol>
                      </li>
                      <li>
                        삭제
                        <ol>
                          <li>
                            등록된 설명은 등록한 사용자에 한하여 직접 삭제할 수
                            있습니다.
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
              <v-divider dark class="mt-3"></v-divider>
              <h2 id="4-">4. 업적</h2>
              <div class="ml-3">
                <ol>
                  <li>이와 관련해서는 [업적 제도]를 참조하시기 바랍니다.</li>
                </ol>
              </div>
              <v-divider dark class="mt-3"></v-divider>
              <h2 id="5-">5. 관리자에 의한 삭제</h2>
              <div class="ml-3">
                <ol>
                  <li>
                    본 [사용 지침]의 각 조항에 해당하는 활동중 문제가 될 시에는
                    삭제될 수 있습니다. 이와 관련해서는 [삭제 규정]을 참조하시기
                    바랍니다.
                  </li>
                </ol>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!-- ### Start : Guidelines ### -->
      <v-divider dark class="mt-7"></v-divider>
      <title-standard upper-title="업적 제도"></title-standard>
      <v-row :class="rowSettings">
        <v-col class="ma-0 pa-0">
          <v-card :class="classSettings" flat outlined tile>
            <div class="ml-5">
              <h2 id="0-">1. 업적이란?</h2>
              <p class="ml-3">
                사용자는 전문/기술 용어, 설명 관련 활동을 통해서 종합 및 개별
                점수(이하 점수)를 얻을 수 있습니다. 사용자는 점수를 획득하는
                것으로, (1) 이하 설명하는 기준에 따라 다양한 업적을 달성할 수
                있으며, (2) 업적에 따른 보상을 얻을 수 있습니다.
              </p>
              <v-divider dark class="mt-3"></v-divider>
              <h2 id="1-">2. 점수</h2>
              <p class="ml-3">
                사용자 점수 제도는 본 서비스가 지향하는 미션과 사용자의 행위가
                일치할 수 있도록 하는데 그 목적이 있습니다. 따라서 본 서비스가
                어려운 전문/기술 용어의 쉬운 설명을 제공할 수 있도록 설명 및
                전문/기술 용어 관련 사용자 활동에 점수가 제공됩니다.
              </p>
              <div class="ml-3">
                <ol>
                  <li>
                    <p>핵심</p>
                    <ul>
                      <li>
                        아래 두 부문에서 취합한 중요 정보만을 토대로 점수가
                        계산됩니다.
                      </li>
                      <li>산식 : 사용자 등록 설명의 총 쉬워요 수(개당 5점)</li>
                    </ul>
                  </li>
                  <li>
                    <p>전체</p>
                    <ol>
                      <li>
                        <p>설명 관련</p>
                        <ol>
                          <li>사용자 등록 설명의 총 쉬워요 수</li>
                          <li>사용자 등록 설명의 총 수</li>
                          <li>사용자 등록 설명의 총 조회수 (미구현)</li>
                        </ol>
                      </li>
                      <li>
                        <p>전문/기술 용어 관련</p>
                        <ol>
                          <li>사용자 등록 전문/기술 용어의 총 수</li>
                          <li>사용자 등록 전문/기술 용어의 총 조회수</li>
                          <li>
                            단, 상기 전문/기술 용어는 심사 이후 공개된 상태를
                            기준으로 합니다. (문제 발견 후 공개 -&gt; 비공개
                            전환 시 제외)
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
              <v-divider dark class="mt-3"></v-divider>
              <h2 id="2-">3. 업적</h2>
              <div class="ml-3">
                <p>
                  본 서비스의 미션과 관계가 높은 사용자 활동에 대해서 일정
                  기준을 충족했음을 알리는 시스템입니다. 업적은 달성 이후 기준
                  미충족이 되더라도, 이미 달성한 업적 내역은 유지됩니다. 단,
                  보상은 유지되지 않습니다. (예. 500위 이내 업적 달성 후 순위권
                  밖으로 내려갈 경우 업적 달성 내역은 유지되지만, 업적 달성 보상
                  뱃지는 상실)
                </p>
                <ul>
                  <li>준비중인 기능입니다.</li>
                </ul>
              </div>
              <v-divider dark class="mt-3"></v-divider>
              <h2 id="3-">4. 보상</h2>
              <div class="ml-3">
                <ul>
                  <li>준비중인 기능입니다.</li>
                </ul>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!-- ### Start : Regulations ### -->
      <v-divider dark class="mt-7"></v-divider>
      <title-standard upper-title="삭제 규정"></title-standard>
      <v-row :class="rowSettings">
        <v-col class="ma-0 pa-0">
          <v-card :class="classSettings" flat outlined tile>
            <div class="ml-5">
              <h2 id="1-">1. 전문/기술용어</h2>
              <div class="ml-3">
                <ol>
                  <li>전문/기술용어에 해당하지 아니한 경우</li>
                  <li>
                    최소 1개의 설명이 작성되지 아니한 채로 6개월의 기간이 흐른
                    경우
                  </li>
                </ol>
              </div>
              <v-divider dark class="mt-3"></v-divider>
              <h2 id="2-">2. 설명</h2>
              <div class="ml-3">
                <ol>
                  <li>타인에 대한 직간접적인 비방, 욕설이 포함하는 경우</li>
                  <li>
                    속하는 전문/기술 용어를 설명하려는 목적이 아니거나, 무관한
                    내용인 경우
                  </li>
                  <li>
                    출처를 밝히기 위한 목적 외의 외부 링크(link)를 포함하는 경우
                    <ol>
                      <li>
                        상기 내용이 의미하는 바에 따라, 밝히기 위한 출처와
                        무관한 외부 링크를 포함하는 경우도 포함
                      </li>
                    </ol>
                  </li>
                  <li>
                    동일 설명이 이미 존재하며, 동일 설명 중 작성 시간이 최초이지
                    아니한 경우
                    <ol>
                      <li>
                        동일한 설명 판단에 적발되지 아니하기 위한 목적으로 부분
                        수정만 된 것이 분명한 경우는 동일한 것으로 판단함
                        <ul>
                          <li>
                            예. &#39;나는 같은 설명이 아니다.&#39; &gt;
                            &#39;나는 같은설명이 아님.&#39;
                          </li>
                        </ul>
                      </li>
                      <li>
                        단, 동일 설명을 복제한 것이 아님을 밝힐 수 있는 경우
                        예외
                      </li>
                    </ol>
                  </li>
                  <li>
                    저작권이 존재하는 내용을 포함해 작성했으며, 아래 각 경우에
                    해당하지 않는 경우
                    <ol>
                      <li>
                        원본 저작물에서 요구하는 방법을 완전히 준수하여 출처를
                        밝혔을 때
                      </li>
                      <li>
                        일부 내용 인용의 경우, 인용 기호(&#39;)를 표시하고 해당
                        내용은 인용된 것임을 밝혔을 때
                        <ul>
                          <li>
                            예1. 홍길동에 따르면, &#39;가는 나에 따라 다가 된
                            것이다.&#39;라고 했다.
                          </li>
                          <li>
                            예2. &#39;A의 90%는 B라고 설명할 수 있다&#39;고
                            C대의 논문 D가 밝힘.
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  <li>위 각 항에 해당하며, 신고된 경우</li>
                </ol>
              </div>
              <v-divider dark class="mt-3"></v-divider>
              <h2 id="3-">3. 회원</h2>
              <ol>
                <li>
                  본 [삭제 규정]의 1, 2조에 해당하는 전문/기술용어 및 설명의
                  작성을 3회 이상 행한 경우. 또는 본 서비스의 미션에 위배되는
                  행위를 악의적으로 지속하는 경우. 단, 아래 각 조에 포함되는
                  경우는 3회 셈에서 제외.
                  <ol>
                    <li>[1. 전문/기술용어]의 2항</li>
                    <li>[2. 설명]의 3항 2호에 따라 예외 처리된 경우</li>
                  </ol>
                </li>
              </ol>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import TitleStandard from '@/components/pages.loopedcomponents/Title.vue'
// import BodyStandard from '@/components/pages.loopedcomponents/Body.vue'
export default {
  components: {
    TitleStandard,
    // BodyStandard
  },
  data() {
    return {
      rowSettings: 'mx-0 mt-3 pa-0',
      classSettings: 'py-5 pl-3 pl-sm-4 pr-13 pr-sm-10',
    }
  },
  head() {
    return {
      title: '기본 지침',
    }
  },
}
</script>
