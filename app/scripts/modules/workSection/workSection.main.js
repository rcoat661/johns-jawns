'use strict';

import $ from 'jquery';

module.exports = class WorkSection {
  constructor($el) {
    this.$el = $el;
    this.$spinner = this.$el.find('.spinner');
    let $feed = this.$el.find('#ig-feed');


    // ig gallery feed
    $.ajax({
      type: 'GET',
      url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=209572101.779eade.1366db92f5394143b14a6ccd7ab43cb1',
      dataType: 'json',
      success: (data) => {
        if (data) {
          setTimeout(() => {
            $el.find('.spinner').hide();
            this.loadFeed($feed, data);
            $feed.addClass('done');
          }, 500);
          let accordionTrigger = this.$el.find('.accordion-trigger');
          accordionTrigger.each((index, item) => {
            let accordionContent = $(item).next();
            let activeState = 'active';
            $(item).on('click', (e) => {
              e.preventDefault();
              if ($(item).hasClass(activeState)) {
                $(item).removeClass(activeState);
                accordionContent.stop(true, true).slideUp(200);
              } else {
                $(item).addClass(activeState);
                accordionContent.stop(true, true).slideDown(200);
              }
            });
          });
        }
      }
    })

  }

  loadFeed(feed, data) {
    let sampleJawns = [
      {
        'image': '/images/jawns/sample-jawn-1.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/B45LD_ADzAMOGTntbUMgwVvn6aUzxWjadR6ypU0/'
      },
      {
        'image': '/images/jawns/sample-jawn-2.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/B2EpXlVDf9BsgDPSFlPNGiH6bpwzC_GK5NNanA0/'
      },
      {
        'image': '/images/jawns/sample-jawn-3.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/B1XKLTIDZChzWsl4u-v8KNPOtodLpiSUMmGxRc0/'
      },
      {
        'image': '/images/jawns/sample-jawn-4.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/B1Fe57vDydThiOFl3bkMJJZdvUnjJdz5AOcV2Q0/'
      },
      {
        'image': '/images/jawns/sample-jawn-5.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/B0zEVNGjUrAVDr7cqntLmdl73iV-P-v4bZn9Zs0/'
      },
      {
        'image': '/images/jawns/sample-jawn-6.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/B0iyhhDD16d909XjNspz5G8ePEOCdiQ2B-P60w0/'
      },
      {
        'image': '/images/jawns/sample-jawn-7.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BtSAcLaDne5pPVJgCCrybm3nRPz_7a-Aiwy6Vo0/'
      },
      {
        'image': '/images/jawns/sample-jawn-8.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BrgUjCYDqGWXqtUz9RtjaqqmlMYWg9AqcZXDd40/'
      },
      {
        'image': '/images/jawns/sample-jawn-9.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BhfKtSZhqRPOHJ313_yUkafwey5_mTwxOFbmj40/'
      },
      {
        'image': '/images/jawns/sample-jawn-10.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/Bfw-SGehO4kx9Ra5AVLgvk-N5yP6b94Y6WD3DU0/'
      },
      {
        'image': '/images/jawns/sample-jawn-11.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BerRM-BhmnEYPhB-8EyE_hL9ncROqj8uhR59zU0/'
      },
      {
        'image': '/images/jawns/sample-jawn-12.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BdTZ2w3hfrY_nD_pyIMV2c5ViuIaZ_jCZ2beKo0/'
      },
      {
        'image': '/images/jawns/sample-jawn-13.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/Bc0lpL-hM5N88iqxT1UhNhiRzLWWEj6Jhdz7ig0/'
      },
      {
        'image': '/images/jawns/sample-jawn-14.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BZUz0DVB1d73Z0m4yATnSb2ZdhcMDe5kWfBTeQ0/'
      },
      {
        'image': '/images/jawns/sample-jawn-15.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BWX2McfhD0mEa0hCbR1wyW-MfS2nsxLdmTiPIc0/'
      },
      {
        'image': '/images/jawns/sample-jawn-16.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BTbkd98gXgF0tksTbBf-9PKBtdErZ88YaCLgN00/'
      },
      {
        'image': '/images/jawns/sample-jawn-17.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BQTRPQcgiQ9twe2AuXyaJ6eTsOjgU9mgLuzNE40/'
      },
      {
        'image': '/images/jawns/sample-jawn-18.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BLzOq7eF3u3zMOqgBOJ0lLWzIlUhvoP0Yx0NW40/'
      },
      {
        'image': '/images/jawns/sample-jawn-19.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BLHpdVBB-ShYbZmQnz5aYUEf7i8bvGgcFKhqks0/'
      },
      {
        'image': '/images/jawns/sample-jawn-20.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BJy0oR_B7O-m8C0rmtz1NtKoaA_xBFgACGFLjA0/'
      },
      {
        'image': '/images/jawns/sample-jawn-21.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BJyzgH_BcHRg7uxv2HOm-qQJMfGhmTEPETggqo0/'
      },
      {
        'image': '/images/jawns/sample-jawn-22.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BJQcGamBLbgJbTmrjxhNSLe3Nfza2VFBZpcGEg0/'
      },
      {
        'image': '/images/jawns/sample-jawn-23.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BIDWEX7gAJ6-tZfvb5f1_e22gukbYKVCpddEIk0/'
      },
      {
        'image': '/images/jawns/sample-jawn-24.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BHad2Shhr6dqL5tpbdWZBeYo2ik-Aa3qdeb5vI0/'
      },
      {
        'image': '/images/jawns/sample-jawn-25.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BGPblTcm97z1_jl_HsnQCT55YpNTqhjv9X0qro0/'
      }, 
      {
        'image': '/images/jawns/sample-jawn-26.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BD9EAIlG9wF4OuaS2vzfygVZUD1ZEonrwpF-Xc0/'
      },
      {
        'image': '/images/jawns/sample-jawn-27.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BCc0M7em9zypvbuCyioeZE-VSnj5TSmZTYJkAc0/'
      },
      {
        'image': '/images/jawns/sample-jawn-28.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/BCBDREMG90xhrUhJicnH04wXWZVgB5QvyKTWMo0/'
      },
      {
        'image': '/images/jawns/sample-jawn-29.jpg',
        'imageAlt': 'Johns Jawn | Woodblock Art | Philadelphia',
        'link': 'https://www.instagram.com/p/zniycOG90-aDcsNd61zkXgAK9R1-gt48Uy1vU0/'
      }
    ];

    for (let i = 0; i < sampleJawns.length; i++) {
      let image = sampleJawns[i].image,
          imageAlt = sampleJawns[i].imageAlt,
          link = sampleJawns[i].link;

    if (i > 1) {
        feed.append(`
          <div class="feed-item" style="background-image: url('${image}')">
            <div class="media-container">
              <img src="${image}" alt="${imageAlt}" />
              <a href="${link}" target="_blank" class="btn" title="View Instagram Post">View Post</a>
            </div>
          </div>`);
      }
    }
  }

};
