import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const buildClient = async (req:  NextApiRequest, res: NextApiResponse) => {
  if(typeof window === 'undefined'){

    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers
    })
  }
  return axios.create({
    baseURL: '/'
  })

}


export default buildClient;