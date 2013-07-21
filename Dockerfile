FROM base
RUN apt-get update
RUN apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:chris-lea/node.js
RUN apt-get update
RUN apt-get install -y nodejs
ADD . /src
RUN cd /src; npm install
EXPOSE 8080
CMD cd /src; npm start